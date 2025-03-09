---
title: Storage Providers
outline: docs
---

# {{ $frontmatter.title }}

Our [website maintenance plans](/introduction/glossaries#maintenance-fee) use various storage providers to ensure your website data is securely backed up and accessible when needed. Below are the storage solutions we utilize for different purposes.

## OneDrive
**Provides [hotlink access](/introduction/glossaries#hotlink-access)** that retrieve copies faster directly to and from the application.
Also stores photo, video files, and other assets. This is accessible for **[collaboration](/introduction/glossaries#headless-cms)** if needed.

::: info Details
* **Use cases**: Primary storage for active client projects, asset management, and collaborative work.
* **Security features**: [AES 256-bit encryption](/introduction/glossaries#encryption), [multi-factor authentication](/introduction/glossaries#mfa-multi-factor-authentication), and regular security audits.
:::

## pCloud
**Secondary [hotlink access](/introduction/glossaries#hotlink-access)** that does not have much changes and activities. Acts as an **extension from OneDrive**.

::: info Details
* **Benefits**: Additional [redundancy](/introduction/glossaries#redundancy) for critical files, with military-grade [encryption](/introduction/glossaries#encryption) ([TLS/SSL](/introduction/glossaries#tls-ssl)) and [zero-knowledge privacy](/introduction/glossaries#zero-knowledge-privacy).
* **Storage capacity**: Up to 2TB per client project depending on website package tier.
:::

## Google Drive
**Server level integration** to perform back up of [databases](/introduction/glossaries#database) (not files or assets) and **collaboration documents** with our clients through Google Sheets, Docs etc.

::: info Details
* **Integration capabilities**: Seamless integration with our project management tools.
* **Collaboration features**: Real-time editing, commenting, and [version history](/introduction/glossaries#version-control) for client-facing documents.
:::

## On-Prem
**Long [retention period](/introduction/glossaries#data-retention) copies**.
We use [SFTP connection](/introduction/glossaries#sftp) to directly download from the server into the hard-disk.

::: info Details
* **[Retention policy](/introduction/glossaries#data-retention)**: Files stored for up to 5 years depending on maintenance plan level.
* **Access protocol**: Secure, encrypted SFTP connections with [IP restrictions](/introduction/glossaries#ip-filtering) and [key-based authentication](/introduction/glossaries#key-authentication).
:::

## NAS Storage
Similar to [On-Prem](/introduction/glossaries#on-prem), with a **sole purpose of file storage**. **Longer retention period copies**.
Automated [SFTP](/introduction/glossaries#sftp) connection via [plug-in](/introduction/glossaries#plug-in).

::: info Details
* **[RAID configuration](/introduction/glossaries#raid-redundant-array-of-independent-disks)**: [RAID-10](/introduction/glossaries#raid-redundant-array-of-independent-disks) for optimal performance and redundancy.
* **Backup frequency**: Daily [incremental backups](/introduction/glossaries#incremental-backup) with weekly [full backups](/introduction/glossaries#full-backup).
:::

## S3-Storage
Varies, from Wasabi, Amazon S3, Vultr, Contabo, Digital Ocean & etc.
Offers **scalable and cost-effective [cloud object storage](/introduction/glossaries#object-storage)** with high [durability](/introduction/glossaries#durability) (99.999999999%) and [availability](/introduction/glossaries#availability) (99.99%). Provides **high performance** for use cases, making it ideal for both frequently accessed and infrequently accessed data.

::: info Details
* **Cost efficiency**: Pay-only-for-what-you-use model with no [egress fees](/introduction/glossaries#egress-fees) on selected providers.
* **[Scalability](/introduction/glossaries#scalability)**: Automatically scales from gigabytes to petabytes without performance degradation.
:::

## Back Up Schedules

Back-up schedules will be varied on the [care plan subscription](/introduction/glossaries#care-plan) for your website package.
Generally, we separate into 3 back-ups types.

::: info Details
1. [Database only](/introduction/glossaries#database) - (Only database and not website files)
   * **Frequency**: Daily for all maintenance plans
   * **Retention**: 30 days for standard plans, 90+ days for premium plans
   * **Storage**: Primarily Google Drive and [S3-Storage](/introduction/glossaries#s3-storage)

2. Website files - (Only website files and not database)
   * **Frequency**: Weekly for standard plans, bi-weekly for premium plans
   * **Retention**: 60 days for standard plans, 1 year for premium plans
   * **Storage**: OneDrive, pCloud, and [S3-Storage](/introduction/glossaries#s3-storage)

3. [Full-site](/introduction/glossaries#backup-types) (Both database and website files)
   * **Frequency**: Monthly for standard plans, weekly for premium plans
   * **Retention**: 90 days for standard plans, 3+ years for premium plans
   * **Storage**: Combination of cloud and [on-premises solutions](/introduction/glossaries#on-premises)
:::

## Storage Provider Selection by Website Package

| Website Package | Primary Storage | Secondary Storage | Full-site Backup Location |
|----------------|-----------------|-------------------|---------------------------|
| Starter Website | Google Drive | [S3-Storage](/introduction/glossaries#s3-storage) (Basic) | Cloud only |
| Pro Website | OneDrive + [S3-Storage](/introduction/glossaries#s3-storage) | Google Drive | Cloud + quarterly [on-prem](/introduction/glossaries#on-prem) |
| HFD Website | OneDrive + [S3-Storage](/introduction/glossaries#s3-storage) | pCloud | Cloud + monthly [on-prem](/introduction/glossaries#on-prem) |
| Online Shop | [S3-Storage](/introduction/glossaries#s3-storage) (Premium) | OneDrive + pCloud | Cloud + weekly [on-prem](/introduction/glossaries#on-prem) |
| Custom Website | Custom configuration based on requirements | Multiple [redundant systems](/introduction/glossaries#redundancy) | Tailored [backup strategy](/introduction/glossaries#backup-strategy) |

::: info Package Selection Guide
* Choosing the right storage configuration depends on your website's complexity, traffic volume, and data criticality.
* Higher-tier packages include more frequent backups and longer retention periods, providing greater peace of mind for [mission-critical](/introduction/glossaries#mission-critical) websites.
:::

::: info Related Resources
### 📚 Looking for More Information?

* [**Website Maintenance Plans**](/maintenance/) - Compare our maintenance packages and find the right fit for your website needs
* [**Security Practices**](/security/) - Learn about our comprehensive approach to keeping your website secure
* [**Disaster Recovery**](/introduction/glossaries#disaster-recovery) - Understand how our backup solutions ensure business continuity
* [**Performance Optimization**](/performance/) - Discover how we keep your website running at peak performance
* [**Technical Support**](/support/) - Find out how to get help when you need it most

*Our storage solutions are just one part of our comprehensive website management approach. Explore these resources to learn more about how we keep your digital presence secure, fast, and reliable.*
:::

For detailed information on how these storage solutions are implemented in your specific [maintenance plan](/introduction/glossaries#maintenance-fee), please refer to your service agreement or contact your account manager.
