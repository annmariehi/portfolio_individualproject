import os  # used to check file size of txt file on line 9
from gtts import gTTS  # google text to speech conversion module
import time  # used to delay while loop to check for the file contents, on line 8.
from os.path import exists as file_exists  # checks if a txt file exists, used on line 6.

if file_exists('./quotegen-rest/text_to_speech/text_to_read.txt'):  # if the txt file exists
    while True:  # infinite loop to check the file
        time.sleep(2)  # wait 2 to recheck the file for contents.
        file_size = os.path.getsize('./quotegen-rest/text_to_speech/text_to_read.txt') # check if the file has a size
        if file_size == 0:  # if file is empty
            print('The file is empty.')
        else:  # if the file has contents
            f = open('./quotegen-rest/text_to_speech/text_to_read.txt', 'r+')  # open the file
            mytext = f.read()  # copy the text into mytext variable

            # passes the text variable and language to gTTS module
            convert_this = gTTS(text=mytext, lang='en')

            # saves the converted audio in a mp3 file named audio.mp3
            # saves in the same folder as this program on your computer
            convert_this.save("./quotegen-ui/Public/audio.mp3")

            f.truncate(0)  # removes contents of txt file
            f.close()  # closes the txt file
            print('Audio file created................')
else:
    print('File does not exist.')



