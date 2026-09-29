Add-Type -AssemblyName System.Drawing

$sourceDir = "C:\Users\User\Downloads\stitch_apparel_manufacturer_b2b_portal (1)\images\extracted_pdf"
$destDir = "C:\Users\User\Downloads\stitch_apparel_manufacturer_b2b_portal (1)\images\catalog"

if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force | Out-Null
}

$files = Get-ChildItem -Path $sourceDir -Filter *.jpg
Write-Host "Found $($files.Count) image files to process."

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)

$count = 0
foreach ($file in $files) {
    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        $w = $img.Width
        $h = $img.Height
        $maxDim = 1200

        if ($w -gt $maxDim -or $h -gt $maxDim) {
            if ($w -gt $h) {
                $newW = $maxDim
                $newH = [int](($h * $maxDim) / $w)
            } else {
                $newH = $maxDim
                $newW = [int](($w * $maxDim) / $h)
            }
        } else {
            $newW = $w
            $newH = $h
        }

        $bmp = New-Object System.Drawing.Bitmap($newW, $newH)
        $g = [System.Drawing.Graphics]::FromImage($bmp)
        $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

        $g.DrawImage($img, 0, 0, $newW, $newH)

        $cleanBase = $file.BaseName -replace '_\d+x\d+$', ''
        $destFile = Join-Path $destDir "$cleanBase.jpg"

        $bmp.Save($destFile, $jpegCodec, $encoderParams)

        $g.Dispose()
        $bmp.Dispose()
        $img.Dispose()
        $count++
    } catch {
        Write-Warning "Error processing $($file.Name): $_"
    }
}

Write-Host "Successfully processed $count images into $destDir"
