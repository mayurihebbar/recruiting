# VC Website

Hey there! Here are some notes on maintaining the Voyager website. The site is hosted on AWS. To started, do the following:

1. Clone this repository.
2. Install [AWS Command Line](https://aws.amazon.com/cli/).
3. Use ``aws config`` to set the access and secret access keys.

Whenever you make a change to the site, first, push it to GitHub to maintain version control. Then, use ``aws s3 cp local/path/to/files s3://www.voyagerconsulting.org/remove/path/to/folder`` to upload it to AWS. Note that the ``--recusive`` option can be helpful for uploading or updating an entire folder.