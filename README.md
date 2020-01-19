# Trip-Control

sudo -u postgres createdb admin <br>
sudo -u postgres psql <br>
create user admin with encrypted password 'admin'; <br>
grant all privileges on database tripcontrol to admin; <br>
alter user admin with SUPERUSER; <br>
psql -U  admin <br>
create database tripcontrol <br>

list database:      \d <br>
select database:    \c <br>
list table:         \dt <br>
list user:          \du <br><br><br>



## if peer authentication failed Error occurs: <br>
https://blog.hostonnet.com/postgresql-peer-authentication-failed <br><br><br>


npm start <br><br>

python3 manage.py makemigrations  --traceback cabApi




