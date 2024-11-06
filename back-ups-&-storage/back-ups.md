---
title: Back Ups
outline: docs
---

# {{ $frontmatter.title }}

## 3-2-1 Back Up Strategy

We use the 3-2-1 back up rule. This rule is a widely recognized data protection strategy that recommends having three copies of your data, stored on two different types of media, with one copy kept off-site. This rule is considered a best practice in data backup and recovery because it provides redundancy and resilience against data loss due to hardware failures, natural disasters, or cyberattacks.

### Three copies of website data.

This includes one copy, which stores in your server for immediete back up on your primary server and another 2 back up copies outsidfe the server.

### Two different storage types

We store your backup copies on two different providers (e.g., OneDrive, Google Drive). This helps protect against different types of failures such as account locked-in, provider downtime etc. Meaning there are two same copies in a different provider for each copy.

### One offsite storage

So now, we have a total 3 copies. Here, we add another copy which is a physical hard-drive, offline.

## Back Up Retention

Back up retention means, how long does your back up copies live in the hard-disk. As this requires more storage, you can refer to our [Service Package](link) to find out more. We craftred the best retention period according to the service package you get from us.

## List of storage providers we use

We ensure that we use reputable providers, equipments that meets the standards of cloud storage.

1. OneDrive - Hotlink access, retrieve copies faster.
For WordPress website, we use a plug-in to auomate back ups.
2. pCloud - 2nd Hotlink access.
Similar to OneDrive.
3. Google Drive - Server level intergration for databases and collaboration documents with our clients.
4. On-Site Computer - Long retention period copies.
We use SFTP connection to directly download from the server into the hard-disk.
5. NAS Storage - Longer retention period copies.
Automated SFTP connection via plug-in.
6. Wasabi - For website with a lot of images/videos/assets but low website traffic.
Connection via plug-ins or serve via CDN, similar for number  7 and 8 below.
7. Amazon S3 - Similar to Wasabi, but for high traffic websites.
8. Vultr, Contabo, Digital Ocean - Similar to Wasabi but for even lower traffic websites.