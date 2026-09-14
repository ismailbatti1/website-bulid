@echo off
title KhyberApex B2B Portal Localhost Server
echo Starting local server on http://localhost:8080 ...
powershell -ExecutionPolicy Bypass -File "%~dp0start_server.ps1"
pause
