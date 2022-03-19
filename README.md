to run -

open quotegen-rest dir in one terminal
make sure you have all required downloads from text_to_speech microservice 
npm install
npm start

open quotegen-ui dir in another terminal 
make sure there is a file in quotegen-ui's dir called .env
(if not - create file called ".env" and copy and paste "PORT=8000" into it without the quotes, save the file)
npm install
npm start

run text_to_speech.py in a seperate terminal, it should be running in the background at all times

react app should automatically start running at http://localhost:8000

:-)
