# Takes raw JSON output and parses names and emails.
# Author: Peter

# import
import csv

# open files
with open("raw_contact.txt", 'r', encoding='utf-8-sig') as inFile, open("contacts.csv", 'w', encoding='utf-8-sig') as outFile:

    # read raw contact data
    data = next(inFile).split("name\\")

    # prepare writer
    outWriter = csv.writer(outFile, lineterminator="\n")
    outWriter.writerow(["name", "email"])

    # iterate through contacts
    for line in data[1:]:
        chunks = line.split("\\")

        # check for formatting
        if len(chunks) > 8:
            # parse and write data
            name = chunks[5].strip(".\" ")
            email = chunks[17].strip("\"")
            if len(email) > 0 and "@berkeley.edu" in email:
                outWriter.writerow([name, email])
