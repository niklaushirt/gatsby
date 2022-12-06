---
title: "Initialize ELK"
date: 2022-11-03T10:57:46+01:00
weight: 52
draft: true
---

# Initial ELK Setup



1. In your OpenShift Console click on the Applications Menu
	
	![image](/cp4waiops-training/pics/14_elk.png)

1. Select **Logging**

1. Click `Allow selected permissions`




1. Input `app*` for the index pattern
	
	![image](/cp4waiops-training/pics/15_elk.png)
	
1. Click `Next Step`

1. Select `@timestamp` for time filter
	
	![image](/cp4waiops-training/pics/16_elk.png)
	
1. Click `Create Index Pattern`

1. Click on `Discover`

1. ELK is now configured. Verify that you have Logs coming in.
	
	![image](/cp4waiops-training/pics/17_elk.png)
	
	

	