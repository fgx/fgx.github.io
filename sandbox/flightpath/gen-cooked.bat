@setlocal
@set TMPOUT=LEIG-L1500-cooked-01.csv
@if NOT EXIST %TMPOUT% goto DOGEN
@echo Warning: %TMPOUT% already exists
@set TMPOUT=tempout.csv
:DOGEN
call fg-play LEIG-L1500-raw-01.csv -o %TMPOUT% -s 53
:END
