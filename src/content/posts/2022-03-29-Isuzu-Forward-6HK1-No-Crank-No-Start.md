---
template: blog-post
title: Isuzu Forward 6HK1 - No crank, no start
slug: /6hk1-1
date: 2022-03-29 09:00
description: Non start Isuzu forward 6HK1, fixed by MOK'S AUTO
featuredImage: /assets/forward.jpg
---
We were called to diagnose a Isuzu Forward FVM34 with the 6HK1 engine, that had a no crank, no start symptom.

We did an initial diagnosis using Isuzu's oem tool IDSS, which resulted in fault codes relating to no communication between the ICU/immobilizer module and the ECM, even though there was communication to both modules by OBD - the ICU and ECM, the ECM was complaining about communication to the ICU.

The ICU was read for fault codes and did not contain any, the live data was read out and the transponder key itself was valid, the ICU was sending a handshake request to the ECM but the ECM was not responding to the request.

Wiring between the ICU and ECM was checked using the appropriate wiring diagram and no defects were found, which lead us to search Isuzu's TIS/information system for any TSBs/advisory, which resulted in common ECM defects in the ECM's immobilizer software for the vehicle we were working on.

The client was informed about the situation and an ECM was ordered by chassis number and programmed. The ECM had no fault codes after programming the new ECM, and starts perfectly now.