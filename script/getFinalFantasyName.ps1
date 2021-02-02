$name = Get-Process -Name "ffxiiiimg"

echo $name

Stop-Process -Name $name.Name