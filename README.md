# Trip-Control

## BackEnd folder name:-tripcontrol
#creating postgres database
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
after completing database creations, creating a python virtual environment name as #cab <br>
created  django project as name #tripcontrol <br>
created django App as name #cabApi
##  Creating Models <br>
Created UserModel,DriverModel,RideModel <br>
## Creating Serializer Class <br>
Created RideSeializer Class <br>
Requirments:<br>
import rest_framework <br>
## Creating Views Class <br>




## Frontend <br>
Creating a Reactjs App as 'tripcontrol' <br>
written Code in typeScript <br>
#1.Add_User page 


npm start <br><br>

python3 manage.py makemigrations  --traceback cabApi




