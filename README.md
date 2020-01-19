# Trip-Control

sudo -u postgres createdb admin <br>
sudo -u postgres psql <br>
create user admin with encrypted password 'admin';
grant all privileges on database tripcontrol to admin;
alter user admin with SUPERUSER;
psql -U  admin
create database tripcontrol

list database:      \d 
select database:    \c
list table:         \dt
list user:          \du



if peer authentication failed Error occurs:
https://blog.hostonnet.com/postgresql-peer-authentication-failed


npm start

python3 manage.py makemigrations  --traceback cabApi




