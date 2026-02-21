@echo off
setlocal

echo ============================
echo   Soma de dois numeros
echo ============================

echo.
set /p num1=Digite o primeiro numero: 
set /p num2=Digite o segundo numero: 

set /a resultado=num1+num2

echo.
echo A soma de %num1% + %num2% = %resultado%
echo.
pause
