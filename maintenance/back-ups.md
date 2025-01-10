---
title: Back Ups
outline: docs
---

# {{ $frontmatter.title }}

## 3-2-1 Back Up Strategy

We use the 3-2-1 back up rule. This rule is a widely recognized data protection strategy that recommends having three copies of your data, stored on two different types of media, with one copy kept off-site. This rule is considered a best practice in data backup and recovery because it provides redundancy and resilience against data loss due to hardware failures, natural disasters, or cyberattacks.

### Three copies

This includes one copy, which stores in your server for immediate back up on your primary server and another 2 back up copies outsidfe the server.

### Two storage

We store your backup copies on two different providers (e.g., OneDrive, Google Drive). This helps protect against different types of failures such as account locked-in, provider downtime etc. Meaning there are two same copies in a different provider for each copy.

### One on-premise

So now, we have a total 3 copies. Here, we add another copy which is a physical hard-drive, offline.

## Retention

Back up retention means, how long does your back up copies live in the hard-disk. As this requires more storage, you can refer to our [Service Package](link) to find out more. We craftred the best retention period according to the service package you get from us.

## Storage providers

We ensure that we use reputable providers, equipments that meets the standards of cloud storage.

::: tip OneDrive

Provides hotlink access that retrieve copies faster directly to and from the application.
Also stores photo, video files, and other assets. This is accessible for collaboration if needed.
::: 

::: tip pCloud

Secondary hotlink access that does not have much changes and activities. Acts as an extention from OneDrive.
::: 

::: tip Google Drive

Server level intergration to peform back up of databases (not files or assets) and collaboration documents with our clients through Google Sheets, Docs etc.
::: 

::: tip On-Prem

Long retention period copies.
We use SFTP connection to directly download from the server into the hard-disk.
:::

::: tip NAS Storage

Similar to On-Prem, with a sole purpose of file stroage. Longer retention period copies.
Automated SFTP connection via plug-in.
:::

::: tip S3-Storage

Varies, from Wasabi, Amazon S3, Vultr, Contabo, Digital Oceon & etc.
Offers scalable and cost-effective cloud object storage with high durability (99.999999999%) and availability (99.99%). Pprovides high performance for use cases. making it ideal for both frequently accessed and infrequently accessed data.
:::

## Back Up Schedules

Back-up schedules will be varied on the care plan subscription for your project.
Generally, we separate into 3 back-ups types.

1. Database only - (Only database and not website files)
2. Website files - (Only website files and not database)
3. Full-site. (Both database and website files)

## Refer to the [service pacakges](packages) that you subscribed to:-

[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
[link](url)<br>
