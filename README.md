what you need to be able to run this project:

1- git clone "the link of the project"

2- cd "name of the project"

3- you need to install the composer "for more information check https://getcomposer.org/download/ "

4.npm install

5- to create the database: " php bin/console doctrine:database:create "

6- to create tables " php bin/console doctrine:schema:update --force: "

7- to create data (random one) " composer require --dev orm-fixtures "

finally you need to start the servers below: 


1- npm run dev-server


2- php -S 127.0.0.1:8000 -t public



project idea.

The idea of the project is to create a web page where our customers (freelancers) can easily check the list of their customers, update them, or completly add new ones.
Each freelancer before he/she accesses the page; which contains the list of customers, need to log in either with email and Password or by using his/her google account.
A new freelancer can always be added to our project by a simple sign up.


For the technical information.

The web site is mainly build using jsx which makes the writing of html in react eassier.
For the database I used mysql database. 
I also wanted to include an api in my final project since it was an important part which was covered in the first lectures of our course 
and for that reason I used symfony which is a php component this api provides some information such us the http status, and also it provides some statistics graphically. 

