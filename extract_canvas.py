# Read MHTML Canvas files and extract student names.
# Author: Peter

# import
from bs4 import BeautifulSoup
import os
from os import listdir
from os.path import isfile, join

# collect all canvas pages
direc = os.getcwd() + "\\canvas_pages"
files = [f for f in listdir(direc) if isfile(join(direc, f))]


with open("canvas_names.txt", 'w') as outFile:
    # iterate through files
    for filename in files:
        print("Processing", filename)

        with open(join(direc, filename)) as f:

            # convert to soup
            contents = f.read()
            soup = BeautifulSoup(contents, 'html.parser')

            # get all student names
            names = [s.text.replace('=\n', '') + "\n" for s in soup.find_all('span')[12:] if s.text]
            outFile.writelines(names)
