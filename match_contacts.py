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
found_names = []
with open("canvas_names.txt", 'r') as contacts:
    for name in contacts:
        if name.strip() in emails:
            emailcand = emails[name.strip()]
            # don't add duplicates (avoid mismatches)
            if len(emailcand) == 1:
                email = emailcand[0]
                if email not in found_emails:
                    found_emails.append(email)
                    found_names.append(name.strip())

# remove dupes
# found_emails = set(found_emails)
print("found", len(found_emails), "emails")
# found_names = set(found_names)
print("found", len(found_names), "names")

# write out
with open("canvas_emails.txt", 'w') as outFile:
    for email in found_emails:
        outFile.write(email + "\n")

# write out to csv
with open("canvas_emails.csv", 'w') as outFile:
    outWriter = csv.writer(outFile, lineterminator="\n")
    outWriter.writerow(["name", "email"])
    for email, name in zip(found_emails, found_names):
        outWriter.writerow([name, email])
