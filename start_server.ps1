param(
    [int]$Port = 8080,
    [string]$Directory = "C:\Users\User\Downloads\stitch_apparel_manufacturer_b2b_portal (1)"
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
    Write-Host "================================================="
    Write-Host " KhyberApex Portal Local Server running!"
    Write-Host " URL: $prefix"
    Write-Host " Serving directory: $Directory"
    Write-Host " Press Ctrl+C to stop the server"
    Write-Host "================================================="

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "index.html"
        }

        $decodedPath = [System.Uri]::UnescapeDataString($urlPath)
        $filePath = Join-Path $Directory $decodedPath

        if (-not (Test-Path -Path $filePath -PathType Leaf)) {
            if (($urlPath -eq "index.html" -or $urlPath -eq "") -and (Test-Path (Join-Path $Directory "code.html"))) {
                $filePath = Join-Path $Directory "code.html"
            }
        }

        if (Test-Path -Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".htm"  { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".gif"  { "image/gif" }
                ".svg"  { "image/svg+xml" }
                ".ico"  { "image/x-icon" }
                ".md"   { "text/markdown; charset=utf-8" }
                default { "application/octet-stream" }
            }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
            $response.OutputStream.Close()
            Write-Host "[200 OK] $($request.HttpMethod) $($request.Url.LocalPath) -> $ext"
        } else {
            $response.StatusCode = 404
            $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $decodedPath")
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $notFound.Length
            $response.OutputStream.Write($notFound, 0, $notFound.Length)
            $response.OutputStream.Close()
            Write-Host "[404 Not Found] $($request.HttpMethod) $($request.Url.LocalPath)"
        }
    }
} catch {
    Write-Host "Server error: $_"
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
    $listener.Close()
}