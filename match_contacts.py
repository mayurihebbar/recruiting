# Compare Canvas names to contact.csv and find matches.
# Author: Peter

# import
import csv

# store contacts
emails = {}
with open("contacts.csv", 'r', encoding='utf-8-sig') as contactsFile:
    for row in csv.reader(contactsFile):
        name = row[0]
        email = row[1]
        if name in emails:
            emails[name].append(email)
        else:
            emails[name] = [email]

# iterate through emails
found_emails = []
with open("canvas_names.txt", 'r') as contacts:
    for name in contacts:
        if name.strip() in emails:
            # don't add duplicates (avoid mismatches)
            if len(emails[name.strip()]) == 1:
                found_emails.append(emails[name.strip()][0])

# remove dupes
found_emails = set(found_emails)
print("found", len(found_emails), "emails")

# write out
with open("canvas_emails.txt", 'w') as outFile:
    for email in found_emails:
        outFile.write(email + "\n")