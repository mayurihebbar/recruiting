# Compare Canvas names to contact.csv and find matches.
# Author: Peter

# import
import csv

# store contacts
with open("contacts.csv", 'r', encoding='utf-8-sig') as contactsFile:
    emails = dict([row for row in csv.reader(contactsFile)])

# iterate through emails
found_emails = []
with open("canvas_names.txt", 'r') as contacts:
    for name in contacts:
        if name.strip() in emails:
            found_emails.append(emails[name.strip()])

# remove dupes
found_emails = set(found_emails)
print("found", len(found_emails), "emails")

# write out
with open("canvas_emails.txt", 'w') as outFile:
    for email in found_emails:
        outFile.write(email + "\n")