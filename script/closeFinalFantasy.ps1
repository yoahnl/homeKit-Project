$name = Get-Process -Name "ffxiiiimg"

echo $name.Name

Stop-Process -Name $name.Name