@echo off
title Push to GitHub (ismailbatti1/website-bulid)
setlocal
echo ==============================================================
echo   Pushing KhyberApex Portal to GitHub
echo   Repo: https://github.com/ismailbatti1/website-bulid.git
echo ==============================================================
echo.
set PATH=C:\Users\User\AppData\Local\Programs\MinGit\cmd;%PATH%
cd /d "%~dp0"
echo Attempting git push to origin main...
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ------------------------------------------------------------
    echo [SUCCESS] Kamyabi se GitHub par upload ho gaya hai!
    echo Ab aap Vercel par ja kar is repo ko deploy kar sakte hain.
    echo ------------------------------------------------------------
) else (
    echo ------------------------------------------------------------
    echo [NOTICE] Agar login maange to apna GitHub username aur
    echo Personal Access Token (PAT) enter karein.
    echo ------------------------------------------------------------
)
echo.
pause
