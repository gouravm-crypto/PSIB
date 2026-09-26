const TEAM_META = {"team": "Post Sale - Inbound", "month": "September 2026", "params": ["ss", "etq", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "thejab": {
  "name": "Theja_B",
  "initials": "TB",
  "color": "#0d9488",
  "cq": 88,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 23,
  "params": {
   "ss": 14,
   "etq": 2,
   "prob": 0,
   "sol": 5,
   "fu": 1,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 7 of 25 audits, for example on the Return Initiation / Request case (01 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 4 of 25 audits, for example on the Return Initiation / Request case (01 Sep). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 2 of 25 audits, for example on the Return Initiation / Request case (01 Sep). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx has placed an Order and cancelled the same and refund has been raised, Cx needs the refund update nd JC informed that the refund has been raised on 26th Aug and refund TAT informed. JC needs to be a little polite on call and inform the TAT to the Cx since Cx was looking for immediate refund. BOD."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has made the Payment for TC 2nd installment and he has nt received anmy update on the same, JC apologized and checked the details. Cx has shared the details but the same has been shared and informed to Finance team and TAT of 24-48 hrs informed to the Cx."
   },
   {
    "query": "Order Tracking / Status",
    "score": 94,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx contacted us to know the status of his refund as well as the delivery status. Jc had a accurate check of the details and updated it to the cx. Failed to check further assistance (Good oe that wished the cx on his birthday)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "01 Sep",
    "comment": "SHAYA Product has bene picked up and still Cx is getting pick up calls. Pick up has been schduled already as informed bu the Cx. Tracking no shared. Need empathy on call. Tone needs to be a little more better. Pick up was confirned amd refund initiated. Need to check the details more clear, BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has raised an return and needs the pick up to be done asap. Retention tried but Cx needs refund only. TAT informed."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx wish to have the product returned. Cx wish to visit the store and Retention needs to be tried kore better and Cx said that she will be viiting the store so 15 days exchamge needs to be tried."
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 81,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had multiple shaya order placed and contacted us to know the payment status of those. Jc had a check over the details and helped the cx with the relevant info. Could have apologised when cx mentioned that our system is difficult to handle as well as when cx mentioned about the payment which was successful from her end but we didn't receive the payment Missed to pitch for CSAT (Irrelevant probing - #CA52AA63 - BOD)"
   },
   {
    "query": "Tresure chest / POP",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx contacted us as she wanted to cancel the TC plan. JC dd the necessary probing however as the same wasn't possible informed the same. However missed to inform that is redeemption isn't done the same would be converted into digi Gold. Also timely apology missed"
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx needs to know te refund of the Order, Its an RTO Order and informed on the refund. Tone needs to be a little more mlid. Trcking no for the pick up done checked since the pick up was not updated."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 80,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx had a issue been faced in regards with the delivery of his shaya order. Jc had a check raised the concern in the ongoing ticket mentioning the best possible delivcery attempt. Avoid interuppting / over lapping, Could sound more gentle at certain places Could have also followed up on the ticket onece"
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx had a concern were he received a incorrect product and so as he was aksed from our end he dropped the product at the store contacting us to know the status of it. JC had a check of the ongoing mail as well as the JC following up on it from the E mail team and responded accordingly. Could avoid interuppting, Could have taken more of ownership in this case, Incorrect Dispostions selected (Long hold-BOD)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. Specific apology when cx mentioned that he was faing a issue to raise the return from the app, Avoid Overlapping, Sounded monotonous (Avoid skipping to mention about the QC check)"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx wants to purchase an SHAYA Product but wants to know that are we taking Old Silver as OGE. JC informed that only OGE is there in CL now and Old Silver exchange is not available."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Delayed in delivery Cx needs the delivery of the Order on the same day and if the same is getting delivered on delayed delivery Cx wish to have the Order cancelled, since Cx is leaving the location. Tracking no shared. Order was delivered on time."
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx product was ordered INTL for india delivery. cx was getting call in the intl num. for the same she was facing issue on delivery. Avoid repeting same thing over, be crisp & clear with the process."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. Better efforts to retain the cx could have been made"
   },
   {
    "query": "Credit Balance",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx contacted us in regrads with the payment concern as well as the credit balance to be viewed in the profile Jc had a check provided the required info to the cx. Could have apologised, Tone could be more gentle"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Over all a good call"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Over all a fine call"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "18 Sep",
    "comment": "When the customer requested a return for damaged jewelry, the JC advised a store visit despite the customer's preference for an online pickup. Moving forward, the JC should explain the store visit requirement with greater clarity and diplomacy"
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "15 days Exchange has been raised for # WE040F6A and the same has been cancelled. JC checked the reason for same and Cx said that she has dropped the product in the Store and refund is not processed. JC informed that he will be arraning an call back from the store team for the same with an update. Need apology and empathy on call for the delay happened."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx needs to know the refund update, JC checked and informed the details. RTO orders and Cx was gettung messages that pick up will be done, JC informed the details and TAT for the refund informed. Need apology on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx is facing Quality issue for the SHAYA products and wish to have the products returned. TAT informed. Pick up confirmation for one product is gven and orher one is cancelled and refund is also cancelled for the same. Need empathy on call and apology for the delay happened. JC has approved the pick up but the same has been failed due to tech issue and inforemed the JC to raise the New KF. BOD. JC missed to check that OGE is used in that order since MB wont be possible only exchange can been done. JC will call and inform the Cx."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has cancelled the Order and placed an Order from store. Exchange amount has been used in the Order nd Store Manager has informed that refund will be processed. JC infofmed the details and informed that he has arranged the call back from the store team. Need apology for the delay and mess happened."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has raised an Exchange and its an defective product. JC checked the details and informed the update. Cx was looking for place a New order with the PB and JC informed the amount has been added to Cx profile and the call will be transfered to Pre Sale team and they will assit the Cx going ahead."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    3,
    6,
    7,
    8,
    9,
    10,
    11,
    14,
    19,
    20,
    21,
    22,
    23
   ],
   "etq": [
    2,
    6
   ],
   "prob": [],
   "sol": [
    3,
    7,
    10,
    15,
    22
   ],
   "fu": [
    9
   ],
   "tag": [
    10
   ]
  }
 },
 "sadiqbashai": {
  "name": "Sadiqbasha_I",
  "initials": "SI",
  "color": "#7c3aed",
  "cq": 87,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 27,
  "params": {
   "ss": 16,
   "etq": 3,
   "prob": 4,
   "sol": 3,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 14 of 25 audits, for example on the 15-Day Exchange case (06 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incomplete information flagged in 2 of 25 audits, for example on the 15-Day Exchange case (06 Sep). Close the information gap completely: share the full process, TAT and next steps, and address every point the customer raised."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Further assistance not checked flagged in 1 of 25 audits, for example on the 15-Day Exchange case (17 Sep). Always check for further assistance before closing."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx wants to have the Order cancelled since the event for which she has placed the Order has been crossed and now the Cx dont wast the product. Order Cancelled and refund will be raised. Short Call, need apology."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Need ID in an normal format since the sme is uploaded in PDF format, Cx agreed and JC informed the details why we need the ID proof to be uploaded in normal format."
   },
   {
    "query": "General Policy Query",
    "score": 70,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx had a concern in regards with the Payment made for her order placed at the store. Jc missed to apologise as well as need to confirm the order ID when being on IB call. Also could have probed for the clarity to know the exact additional amount paid by her at the store to assist her accordingly. Later call was disconnected a follow up call was made which wasn't connected, If the OB call is not connected need to drop a SMS Incorrect disposition selected - BOD"
   },
   {
    "query": "General Policy Query",
    "score": 85,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx was having issue with the Invoice and the Payment hasm been done via TC and Cx claims that there is an difference of 5 K and the sam is no where mentioned in the Invoice. Call was disconnected and the JC Called the Cx back but before that the Cx called IB and the issue was sorted. BOD. JC missed to his Name on call opening. Need to seek apology for the mess happened and need correct greeting on call openong."
   },
   {
    "query": "Product Broken / Damaged",
    "score": 90,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Call was made to inform the cx that during the invoicing it was observed that there was a issue with the quality of the product and so the same can't be dispatched. Jc communicated it and retained the cx by placing new order for it. Need to use more of better phrase as well as need to mention the timeline of the placing the new order as well as the delivery date would reflect in the app."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has an TC enrolled with us and installment has been paid but the same is not reflecting and JC checked for the payment mode and Cx has opted from Phone Pe and informed the detals. Payment has been received and updated in TC. JC was suppose to inform the Cx that if the Payment is debited from his account the ame will be reflected post 2-3hrs of the Payment for TC if failed the same will be refunded back. Need valid probing on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Greeting Missed, Cx has raised an return for the product and Cx needs BC since Cx dont like the product and needs to seek apology missed. Cx said that she will be visitiung the store and store drop informed."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx has returned an SHAYA product for return and needs the refund update. Cx needs the payment via CC and JC checked and informe dthe CX to update the Bnak Account details in the CL App. Need to seek apology for the delay in refund happened."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx was looking to place a order via COD. Jc initially missed to inform about the purhase which could be made via store as well. However later the same was communicated (First could apologise then convey the info that the same isn't possible)"
   },
   {
    "query": "15-Day Exchange",
    "score": 50,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx had a purchase made for a product which was delivered to her but she had a concern in regards with the design looking for resolution. Jc had a check missed to apologise, confirm the order ID, Oneview Probing not done correctly in regards with size as well as pincode Missed to inform that she need to make a visit to the store within 15 days from the date of delivery. However to make a visit to the store for the reolution was informed."
   },
   {
    "query": "Repair Request",
    "score": 75,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx was facing a issue with the quality of the product and so contacted us. Jc had a check probed for the order ID and informed the possible reason for it. Missed to apologise, Incorrect information given - 14KT gold purity is 58.3% and not 50%, Also always need to provide the pro active info if charges are applicable"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx was looking to return a product under 15 days MB via TAH and was facing a issuebso contacted us. JC had a check over the details however on the previous call pitched for exchange were as missed on this call however BOD given. Failed to portray Empathy when necessary Later had a word with the TAH FE by having the issue resolved."
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 75,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx has received the SHAYA product delivered and he has placed for Diamond Ring and received Brozen product. Cx needs the update on the same and informed the JC that he wish to hav ethe product returned back and not willing to keep the product with him. JC informed for 15 days MB or exchange and Cx agreed and informed that he will be dropping an email for the same. More apology needed on call. BOD, Tagging needs to be done in Wrong Product rceived and not in product quality."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx has purchased an Shaya product and the product has been broken with in 06 months and the JC has shared the approx repair date start and TAT informed. Over all the call was handeled okay. Cx was asking on the LTE for teh SHAYA product ad JC informed the details and need empathy for the product broken."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx has placed an Order but the Payment has been failed. JC informed that the Order is auto cancelled and Cx can go a head and place an New Order, JC missed to check with the that whether he can have the call transfered to Pre Sale SINCE cx was asking for Payment Link, BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done."
   },
   {
    "query": "15-Day Exchange",
    "score": 94,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx had placed a retrun request and contacted us to to have that cancelled as she wanted to visit the store and exchange it Jc had a check over the details and informed and provided the required information. MIssed to check for further assistance"
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx wish to have the POP Cancelled and JC informed the details and how the same can been utilized if the Cx is not willing to pay the amount. JC informed the process to the Cx."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx was having issue with the profle balance amount and JC was connected with the Cx over the WA and screen shot shared by the Cx. Cx was wishing to place a New order and Call was transfered to Pre sale and JC assist the Cx. Need aplogy on call for the issue that the Cx faced with."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 81,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Greeting missed on call opening, Cx said that store team informed the Cx that the product will face tarnishing issue and Cx needs to know the details. JC needs to be more confirdent on call and inform the Cx that teh issue wont happen and use positive phrases on call."
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Please keep the mic away from your face, breathing noise found on call. Good call overall."
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Well done!! JC had taken additional initiative to address the customer concerns. Please refrain from being multi-lingual when the customer is speaking a singular language. Overall an excellent call."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    3,
    4,
    5,
    6,
    7,
    9,
    10,
    11,
    12,
    13,
    15,
    17,
    18,
    19
   ],
   "etq": [
    3,
    16,
    19
   ],
   "prob": [
    2,
    5,
    9,
    14
   ],
   "sol": [
    8,
    9,
    10
   ],
   "fu": [],
   "tag": [
    12
   ]
  }
 },
 "nitheeshr": {
  "name": "Nitheesh_R",
  "initials": "NR",
  "color": "#2563eb",
  "cq": 87,
  "audits": 31,
  "ncf": 1,
  "totalErrors": 25,
  "params": {
   "ss": 14,
   "etq": 5,
   "prob": 3,
   "sol": 3,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "1 NCF this month on Repair Charges Dispute. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 10 of 31 audits, for example on the Repair Charges Dispute case (23 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 5 of 31 audits, for example on the Repair Charges Dispute case (23 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "27 Aug",
    "comment": "EDD has been revised and Cx is irate due to the same. Cx has placed an Order and the same is getting delayed in delivery and the Order has been placed for festival. Cx is irate due to delay in delivery. JC informed to visit the store and purchase the similar designs since the product placed by Cx is not available in stores. RTO raise and TAT informed. Need positive phrases on call, BOD."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx needs the delivery asap on the same day since the same is an RAKKI GIFT and JC informed the Cx that the same will be delivered. Order delivered."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 62,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has given the product for repair and she needs the status of the same. JC informed that one of the product will be dispatched since the same is repair not possible case and another product will be delivered soon post repair. Cx said that he has received an upate the Order has been delivered and waiting for the another product and its getting delayed and SM from store informed that the Order can been delivered t6o home but now he is dening the same. JC was suppose to inform the store oin the same but informed that due to some dfficultie the same cant been done and need empathy and poaloigy on call more since CX is facing delay in repair process."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx is facing the issue with the delivery person and he informed that the Order cant been delivered to Cx address and the same was reattempted and issue still exists. JC informed the Cx to share the details of the Coutier person and he will check and get the delivery of the Order done and Cx needs an call back for the same but JC is in follow up with the Cx. JC needs to inform the Cx that he will check and get the issue resolved. JC was connected with the Cx over WA and shared the update as per the logistics that Order will be delivered to store and Cx agreed to collect the Ordr from Store."
   },
   {
    "query": "Refund Status / Delay",
    "score": 90,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx contacted us looking for an update on the refund of his order. Jc had a check over the details and raised the ticket as required. Missed to apologise timely as well as need to sound more polite Ensure to inform the cx as per the update received in the ticket"
   },
   {
    "query": "15-Day Exchange",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx wish to have the product exchanged SHAYA but the same has been crossed 15 days and the exchange cant been done, JC informed the Cx."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has enrolled an TC and Cx has placed an TAH Order and was having the issue with the GWD and call was transfered to TAH team and call was address by TAH."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had given a product for repair and were repair of it was not possible. So cx wanted to know the update about the status of her order. Jc had a check over the details and provided the accurate update on it. Could have apologised"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx was looking to returne her order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wnated to proceed with return needful was done. Timely apology required, Better phrasing for retaining the cx could be made, Missed to confirm the order ID Avoid skipping to mention about the QC check"
   },
   {
    "query": "Digi Gold",
    "score": 88,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx had a concern in regards with selling the Digi Gold and so contacted us. Jc started to probe by cheking over the details meanwhile call got disconnected, CB was done which wasn't connected. Timely apology required, Sir I am able to see this - when cx mentioned his name (Better phrasing)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx wish to return the product since she feels the product is not worthy and JC tried for retention but Cx needs refund only and pick up confirmed and TAT informed for refund. Need to seek more apology ane empathy on call."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 95,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx contaced us to know the status of his repair order. Jc had a check requesting additional time from the cx to check with the store team about the status of it and follow up call with an update was provided. Need to also ask for futher assistance even on IB call"
   },
   {
    "query": "Order Tracking / Status",
    "score": 94,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx wants to know regarding the Order delivery details # EZKTNJBR19F5Y-JM Solitaire Product, JC checked and informed the details and reason for the delay occured. Iss an engangement ring and EDD cant been given and its already delayed. Wishes missed."
   },
   {
    "query": "Refund Status / Delay",
    "score": 81,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx had a concern in regards with the refund against a order which was cancelled and so contacted us. Jc had a check over the details, As the voice wasn't clear could have probed like the voice isn't clear and requesting to repeat instead of incorrect probing twice. However later the required info was shared verbally as well as via WA, IVR transfer missed Listening/Understanding skills - BOD"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 90,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had a concern in regards with the repair of her order given 1 month back were she was suppose to receive a CB from our end. Jc had a check over the did the necessary probing by requesting to provide grace time from the cx to check for the update. Later CB was done and cx sounded satisfied with the resolution Missed to apologise for the query specifically, When asking for wow need to sound better and not like boliye ma'am."
   },
   {
    "query": "Refund Status / Delay",
    "score": 80,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx contacted us to know about the refund status of a order which was cancelled. JC did the necessary probing, apologising for the issue later had a check and shared the required Referece no. Timely apology along with it need to sound gentle throughout the call, Rather than informing probe to keep the call on hold Incomplete information given - usually the refund reflects in the next billing cycle need to inform that as well"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx has placed an Order and claims that she has received an wrong KT Order and JC checked and informed like the Cx has selected an wrong or different kt product and Cx agreed.."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx has placed the Order # EZAMDSBR7596S-JR and sue to some reason Cx wish to hav ethe delivery to be done from another store but the Order has been placed from different store and the invoice done. CE raised and approved for the store refuud and refund processed. More apology needs to be there for the issue faced by the Cx."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx order EDD missed she called multiple time to get solution."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx wants to know the regarding the Order # X-L529F702, Cancellation. Nee apology on call. RTO raised and TAT informed for the refund in CL Profile balance. Cx needs refund but the same is not possible since 15 days amont has been utulized in the Order and JC informed that he will make sure the delivery of the Order will be done and Cx agreed."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Over all a fine call"
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "LTB and Cx needs to know regarding the refund is getting delayed and JC checked and informed the details. TAT informed and refund has been processed. Need to seek apology for the mess and wrong inform shared by the previous JC. Refund not yet done."
   },
   {
    "query": "Order Tracking / Status",
    "score": 81,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Order delivery status and the same is getting delayed in delivery. No apology and empathy on call. Order was delivered on the same day. Cx was calling back to back for the Order delivery and call was on hold and disconnceted by the Cx. Hold needs to be worked on. Cx was extreme irate. BOD, Order delivery issue."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 0,
    "ncf": true,
    "date": "23 Sep",
    "comment": "Cx has missed the call for Repoair Charges and Cx called us back and Cx claims that she has has given the broken piece and the product to the store since she is charged for the repair. JC needs to owe apology ad work on tone sibce Cx was asking the reason for repair. JC was a littkle rude on call and informed that the product will be sent back if the Cx is not fine with the repair charges. Cx was not happy with the info and assistance with the JC informed and said that she will be speaking with the store."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "15-Day Exchange",
    "score": 90,
    "ncf": false,
    "date": "23 Sep",
    "comment": "When the call is on hold for durations exceeding 1 min, please notify the customer that it is taking longer than expected."
   },
   {
    "query": "15-Day Exchange",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call, cx required understanding in patience. Jc assisted in the right manner. Excellent work!!"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Customer suspected the product was inauthentic and requested a refund, primarily concerned about the 15-day return window. The agent should have addressed these concerns in a more polished, confident, and reassuring manner."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "cx was worried for the false update on the delivery, JC assisted the cx with the details."
   },
   {
    "query": "Call audit",
    "score": 83,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Revised audit - JC should be attententive call, although a wrong information given was rectified by keeping the call on hold and on the same call. It is expected that the JC avoids such misses as it will cause confusion for customers and lead to escalation."
   }
  ],
  "paramCaseMap": {
   "ss": [
    2,
    3,
    4,
    8,
    9,
    10,
    14,
    15,
    17,
    19,
    21,
    22,
    23,
    28
   ],
   "etq": [
    11,
    12,
    13,
    22,
    25
   ],
   "prob": [
    8,
    13,
    23
   ],
   "sol": [
    2,
    15,
    30
   ],
   "fu": [],
   "tag": []
  }
 },
 "mazian": {
  "name": "Mazia_N",
  "initials": "MN",
  "color": "#0891b2",
  "cq": 86,
  "audits": 30,
  "ncf": 0,
  "totalErrors": 32,
  "params": {
   "ss": 18,
   "etq": 3,
   "prob": 1,
   "sol": 6,
   "fu": 3,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 12 of 30 audits, for example on the Order Tracking / Status case (04 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Rushing the close flagged in 3 of 30 audits, for example on the Call audit case (23 Sep). Do not rush the close. Confirm the customer is satisfied before ending the interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 3 of 30 audits, for example on the Credit Balance case (05 Sep). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Order was not delivered and Cx was irate due to the delay in delivery and JC checked and raised SR ad Order was delivered on the next day."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx wants the Order delivery status and the Order is in transit from FC to the store. Cx has placed the Order for an Occassion and needs the delivery asap. EDD has been revised to 31st Aug but Cx called us before the update. JC handeled the call over all well. A little more positive phrases needs to be used."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx wants the Order to be cancelled and needs the refund. Cx informed that she has received the ARN no for the refund and Cx has not received the refund. JC checked the TAT informed for the refund since the same has been initiated on 26th or 27 Aug."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx needs the delivery status of the Order. Order has bene dispatched and facing an issue with the delay in delivery and the EDD revised to 30th Aug. Apology and emoathy needs to there on call. Order is getiing dispatched on 29th and REDD on 30th Aug, updated was mentioned in the bridge by 28th Aug. BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "CX needs the SHAYA product to be picked up and cx didnt liked the product, needs apology for the same missies, Retention tried but Cx needs MB only. Need to un wanted confusions on cal, BOD. Retention needs to be a little more better."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has raised for the return and JCchecked for the details and needs to seek apology if the Cx is facing any issue with the product or didnt lijed the product. Retention tried but Cx needs MB."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Retention Cx had a cancellation request placed and contacted us to know the status of it. JC did the necessary probing trying to retain the cx however later as cx wanted to proceed with the return needful was done Under BOGO offer cx could return only one order"
   },
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx had a order placd against which the amount was deducted but the order reflected to be cancelled. Jc apologised however also could have check for the payment at our end first instead of raising a ticket directly. Rest the query was well handled ensure to follow up on it and have it closed"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 80,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx was facing a delay in the delivery of her shaya order and contacted us to know the status of it. Jc had a check over the details informing the cx that would have a ticket raised for it. Failed to portray Empathy when necessary, Irrelevant probin for the order ID was done Revised as per the screenshot shared"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Delay in delivery and Cx is irate due to delivery is getting delayed and Order is placed on 02nd July and the EDD is on 13th SEP. JC informed that she will have the Order dispatch and delivery at the earlist."
   },
   {
    "query": "Order Tracking / Status",
    "score": 70,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx was facing a delay in the delivery of her order and contacted us to know the status of it. _x000D_ _x000D_ Jc had a check over the details timely apology missed need to avoid overlapping however followed on the case and provided the best possible resolution by placing a new order. _x000D_ _x000D_ Need to reply positively when cx asked yeh misroute ho kaise jata hai,Avoid mentioning and keepng the call on hold for 2 min_x000D_ _x000D_ Delayed follow up observed as mentioned to the cx that will Call u back in 15-20 min."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx has enrolled for POP and its redemption time is on 22nd Sep and Cx wish to make the purchase now. JC checked and informed on the details."
   },
   {
    "query": "Credit Balance",
    "score": 75,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx contacted us to know the status us her refund to profile. Jc had a check over the details did the necessary probing missed to apologise. As this was pending for almost a week could have taken additional ownership."
   },
   {
    "query": "Order Tracking / Status",
    "score": 85,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx was facing a delay in the delivery of her order and so contacted us to know the update on the delivery of it. Jc had a check over the details and as required raised the concern, later product was delivered. Missed to apologise and incorrect tagging."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had a order placed from the store which reflected to be marked as delivered but which wasn't delivered. Jc did the necessary probing and as it was a TAH order call was transferred to the respective team. Need to always mention that as we have a limited access to certain details so I would need to coonect your call to specific team so that they can view and help you on it"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 70,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had a concern in regards with the repair of her order given 1 month back. As voice wasn't clear to the cx Cb was made, Later probed for the order ID and then informed that she would have a ticket raised as well as inform it to the store. Missed to apologise (No records of the ticket raised found. If any Kindly share the screenshot)"
   },
   {
    "query": "15-Day Exchange",
    "score": 80,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx wish to have the product exchanged due to the size issue with the product and JC assisted the Cx on it. Over all a fine call. An little apology needs to there on call and when the cx is greeting and checking hru we are suppose to geeet the Cx back."
   },
   {
    "query": "Digi Gold Sell-back (Withdrawal)",
    "score": 75,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx has enrolled for DG Via Phone Pe and wish to have the same to be salod out and JC informed the Cx to check with the PP CC. Tone needs to be even more better on call. Need o seek apology and inform that via PP login only the details can been checked there end only. Stotre details checked and details shared."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Delayed Delivery call, # H1768E0A and TAT given for the delivery and Order was delivered on 16th Sep."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Failed Pick up call, Cx said that the pick up for the Order is pending from 3-4 days and needs the product to be picked up asap and JC informed that the old PICK UP KF was cancelled and she has raised the New pick up KF TAT given for pick up. Retention missed but Cx is looking for Return only since BOD."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Cx needs the refund for the Order since the sameis getting delayed and since the Payment of the same was utilized from the Exchange Order the refund can been done on exception and Cx needs to add the Bank account but Cx was nit fine and later Cx agreed to add and JC guided the Cx. Dead air on call needs to be avoided. A little more empathy needs to there on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 80,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx has not received the refund and JC checked the details that the Bank details is updated and JC requested the CX to reenter the details again. Cx was irate and informed that he will be updating the details on call. Refund has been completed on the same day. Cx asked for the email confirmation but no email seen. BOD. Call back done from JCs end."
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx needs to know the LTE value details is not added to the Cx profile and the pick up was done in the month of August. JC has raised the issue to the back end. Cx was a little irate due to delay in LTE process."
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Retention Customer requested a return and refund for Shaya jewelry due to dissatisfaction with the appearance and sizing. JC pitched an exchange, but the customer declined and requested a refund only lack of enthu on call"
   },
   {
    "query": "Delivery related",
    "score": 90,
    "ncf": false,
    "date": "22 Sep",
    "comment": "estimated delivery date (EDD) for the order was missed, which caused significant distress to the customer as the item was intended as a birthday gift. Additionally, the JC sounded low-energy during the call"
   },
   {
    "query": "Rush Delivery Request",
    "score": 94,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Avoid using multiple statements like - location nahi dikha raha hai instead frame it as live tracking system nahi hota hai sir but aaj end of the day se pehle hojayega and then mai backend team ko ticket raise karti hu, we are backend team as well. JC needs to use better phrases while conversing. Will discuss during feedback Follow up call was found, good work on it but the rate of speech was too fast."
   },
   {
    "query": "Call audit",
    "score": 94,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Please reduce your rate of speech during OB call. Empathise during such calls as well. Will guide you during feedback"
   },
   {
    "query": "Call audit",
    "score": 85,
    "ncf": false,
    "date": "23 Sep",
    "comment": "A good call but the phrases could be a lot better. Avoid using \"Pura barabar daali hu sir\" it sounds like a rectification of error, instead you could say \"Ji sir, kya mai ek baar address repeat karu dekh ke aap bata payenge ki yeh sahi hai ya aap kuch change karna chahte hai\" before the customer asking. Also in most of the calls i see rate of speech being too high, please reduce the same. Also for seeking feedback during the same call, we can use better sentences too the customer kind off felt a little drawn back since the JC was on call too and he was to say feedback suddenly."
   },
   {
    "query": "Return Initiation / Request",
    "score": 62,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Retention Customer requested a return due to sizing issues; the agent failed to pitch an exchange or make a retention attempt. Additionally, the agent sounded monotonous and lacked positive phrasing and ownership statements throughout the call"
   },
   {
    "query": "Credit Balance",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Customer requested a refund of their profile balance. JC informed them that refunds are not applicable for store orders and offered an exchange for other jewelry. However, the agent repeatedly used \"ma'am\" and needs to sound more polished and professional"
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3,
    4,
    5,
    6,
    8,
    10,
    12,
    13,
    15,
    16,
    17,
    20,
    23,
    24,
    27,
    28,
    29
   ],
   "etq": [
    25,
    26,
    27
   ],
   "prob": [
    8
   ],
   "sol": [
    4,
    6,
    7,
    12,
    16,
    28
   ],
   "fu": [
    10,
    15,
    21
   ],
   "tag": [
    13
   ]
  }
 },
 "mohammadsalmans": {
  "name": "Mohammadsalman_S",
  "initials": "MS",
  "color": "#b8860b",
  "cq": 84,
  "audits": 30,
  "ncf": 0,
  "totalErrors": 34,
  "params": {
   "ss": 21,
   "etq": 4,
   "prob": 3,
   "sol": 5,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 13 of 30 audits, for example on the Return Initiation / Request case (28 Aug). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 8 of 30 audits, for example on the Return Initiation / Request case (28 Aug). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 3 of 30 audits, for example on the Tresure chest / POP case (04 Sep). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Delayed delivery and Cx needs to know the Order delivery status. Order is OFD and Cx needs the delivery asap. JC needs to owe an apology for the delay in delivery caused."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx needs the delivery of the Order on the same day if not she is willing o have the Order cancelled the Order. Order cant been delivered since the same has been cancelled and amont ha sbeen credited to Cx Cx profile. JC infomeed the delivery TAT as per the update received from Logistics team but due to non delivery of the Order delivery has been cancelled. A littlke more positive phrases needed on call."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has receoved an SHAYA Nexklace and claims that he has not received the update on the metal weight. JC checked and informed the details and Cx wants to know the LTE & LTB details and JC informed informed the details. Need to owe apology for the mess happened."
   },
   {
    "query": "Return Initiation / Request",
    "score": 38,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx wants to know regarding the return of the Order, SHAYA Product. Language switching needs to be avoided. JC informed the Cx that she can opt for next size product where as there is no size big and small in SHAYA products. BOD, JC missed to inform the Cx there will be ony one fixe size in SHYA products. BOD. Need better Retention efforts on call. empathy and apology onc cal."
   },
   {
    "query": "15-Day Exchange",
    "score": 81,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Over all a fine Retention call but need apology since Cx cancelled the Order due to delay and Stire Visit informed and Cx placed the Order from store post exchange. Long hold on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx contacted us to know the status of her refund against a Shaya product which was returned Jc did the necessary probing and informed the timeline of it. Timely apology missed, Also try to use better phrase when cx compares us with other brand, Always acknowledge the query informing let me have a check and help you with the details"
   },
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had a concern in regards with the delivery of her order and so she contacted us. Jc had a check over the details and as required raised a ticket for it. Missed to apologise as well as need to use better phrase Avoid overlapping"
   },
   {
    "query": "15-Day Exchange",
    "score": 81,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx contacted us to know about the exchange possibilities of her order Jc had a check over the details and provided the required info however need to be clear that only one time full value exchange is possible on a product for which fresh payment is made as well as 90% of the value is to be used under 15 days exchange at the store. Missed to pitch for CSAT (*Go ahead* - better phrasing, Incorrect Dispostions selected - BOD)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx wish to have the product reteurned in MB and placed a New Order to JC tried for Retention but Cx needs refund only."
   },
   {
    "query": "Tresure chest / POP",
    "score": 80,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx had a concern in regards with the Two TC plan purchased by his while trying to redeem it on a single product at the store. Jc had a check and tried to provide the best possible informiation however as additonal time was required to check on few more further details CB was done for it. Try mentioning the update via SMS / WA if a OB Call isn't connected Missed to apologise timely, Avoid interuppting, better phrasing could have been done"
   },
   {
    "query": "Order Tracking / Status",
    "score": 80,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx had a concern in regards with the delivery of a store order to her location as well as PF concern. Jc had a check did the necessary probing timely apology missed, Better phrasing need to be done Later as a CB was to be arranged needful was done."
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx was looking to returne her order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wnated to proceed with return needful was done. Pick up address confirmation was to be done, Missed to pitch for CSAT Hamara yeh product chota hai, I think aapko pata hoga ki aap 15 days exchange ke liye bhi jaa sakte ho - Better pitch to return could be tried - Better phrasing, Avoid dead air"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Order delivery issue and its getting delayed and Order was finally delivered on 03rd Sep."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Repair product has not delivered post repair and Cx is irate. JC checked and confirmed that the Order has been delivered to the store and arranged an call back. Positive phrases missing."
   },
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had a concern in regards with the delivery of a order which wasn't delivered but it was mark delivered. Jc had a check and informed that the same is due to tech issue. However later ticket for it was raised, Avoid overlapping, Go ahead - better phrasing for this as discussed earlier"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Order Status of # S37E1B2D and the same is facing delay in delivery, JC has checked and informed that the product is delivered to store since its an Store Order and stire call back arranged."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Order for SHAYA Silver coin is getting delayed and Cx wants the delivery asap if not needs to cancel ad proceed with refund. Dead air is not be avoided. Order was delivered on 07th Sep. Address confirmed."
   },
   {
    "query": "Tresure chest / POP",
    "score": 75,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx started the plan thinking EMI should have explined better in the call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 70,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had returned a product at the store and contacted us to know about the refund status. Jc did the necessary probing and upon checking provided the accurate update as well as resolution to the cx. Timely apology missed and need to use more of ownership phrase, Incorrect information about the refund timeline mentioned as well as understanding the need of the cx try to escalate to the concern team (Avoid mentioning to keep the call on hold for 2 min)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx wants to have the product exchanged and the same is gettng delayed and pick up is getting cancelled. Cx is worried on the same. # J519E2FC pick up done on 11th Sep and Cx is looking for the Purchase of an New product. CSAT Missed."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 88,
    "ncf": false,
    "date": "18 Sep",
    "comment": "cx wanted instant refund as it was emmergency, jC informed the timeline so cx asked if the refund process will be quick at the store for which JC first stated yes later said needs 7-8 business days lack of active listening & as the cx said emmergency could have been more emphetatic towards cx"
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx has purchased an product from Store and wish to return the same and JC informed 15 days exchange is possible. Cx said that she was informed that return is possible for the same. Cx wants to know regarding the TAH and jC informed that he will be arranging the call from TAH. Need o owe apoligy since she was informed the process wrongly."
   },
   {
    "query": "Digi Gold Sell-back (Withdrawal)",
    "score": 75,
    "ncf": false,
    "date": "22 Sep",
    "comment": "DG payment is getting debited from PAYTM and CX is not willing to continue the same needs to stop the same. JC informed that he can check with the Paytm CC and they can assit the Cx. Need apology and empathy on call."
   },
   {
    "query": "Repair Charges Dispute",
    "score": 75,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Repair Product # Q3FD00F7, Cx calims the Qualty issue of the product and JC informed the product is getting recasted and there are no repair charges charged for if in case its an QC ssue but its an wear and tear issue and diamond needs to be added the repair charges will be there. JC tried explaining the details but Cx was not ready to listen Cx was asking like how can the product face such issue soon with in a month and KF has been closed mentioning that product needs to be sent back as it is since repair charges is not approved by the Cx post the JC spoken with the Cx. BOD. Need more probing on call."
   },
   {
    "query": "Points / Loyalty Redemption (Xclusive / Encircle)",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx had a query regarding review points."
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx was iRate about delay in exchange and return services, the store customer service and overall exp. JC tried to find a resolution by keeping the call on mute, proceeded to ask the customer if they wanted to proceed with LTE or LTB, cx was iRate and said he just wants to cancel everything online and proceed with the store. JC Interrupted the customer, cx explained the complete senario to the JC. Upon complition, JC seeked time and gave assurance to the customer by placing the call on hold. The call was disconnected but the JC called back and resolved it for the customer."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work!!"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "cx wanted money back for store order, As the same was not possible she rated dislike"
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Customer requested a full refund for a 9KT jewelry piece that faded within 2 months, citing quality concerns. The customer was dissatisfied with the provided solution. The agent could have better explained the Lifetime Exchange (LTE) policy and its financial benefits to encourage the customer to purchase higher karat jewelry"
   },
   {
    "query": "Return Initiation / Request",
    "score": 40,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Cx is facing the issue with the Order # S939C42C related to pick up of the Order. Wrong product received and email going on - Re: Re: Re: Re: Investigation Request for Raghuvansh R : Investigation - PD - Gold, Cx has raised the issue in Consumer Court too, call was disconncted and JC was suppose to call back the Cx but missed and Listening/Understanding skills was very poor and pick is already raised in the Order JC was asking the Cx whats the issue."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    9,
    10,
    11,
    13,
    14,
    17,
    18,
    20,
    21,
    22,
    23,
    25,
    28,
    29
   ],
   "etq": [
    4,
    7,
    11,
    19
   ],
   "prob": [
    3,
    11,
    23
   ],
   "sol": [
    3,
    7,
    18,
    28,
    29
   ],
   "fu": [
    29
   ],
   "tag": []
  }
 },
 "ayeshat": {
  "name": "Ayesha_T",
  "initials": "AT",
  "color": "#db2777",
  "cq": 82,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 34,
  "params": {
   "ss": 16,
   "etq": 3,
   "prob": 7,
   "sol": 6,
   "fu": 1,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 11 of 25 audits, for example on the Order Tracking / Status case (31 Aug). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 4 of 25 audits, for example on the General Policy Query case (08 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 3 of 25 audits, for example on the Order Tracking / Status case (31 Aug). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Shaya Product Quality Issue",
    "score": 62,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx call was disconnceted and JC Called the but teh Cx was already talking to the JC.Cx said thatshe is facing the issue with the weight of the product with the SHAYA PRODUCT. Cx claims that product was having the weight with 0.4 grm and the product is weighting of 0.2 grm, in tbe product discription its mentioned the details like the Grows weight and other details the same ws suppose to be informed to the Cx and its an SHAYA DIAMONDS product, JC missed to inform."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx has issue with the TC redemption and due to non redemption the same has been converted to DG with deductions and Cx is not fine with the same and JC needs to owe empathy on call and apologize and inform the Cx said that its an SPAM and need to make the CX understand its the policies of CL TC. Need Senior call back and the same has bene arranged."
   },
   {
    "query": "Order Tracking / Status",
    "score": 60,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx was facing a delay in the delivery of his order which was suppose to be re-dispatched and contacted us to know the status of it. Jc had a check over the details, missed to apologise and use more of better phrase as well as need to avoid dead air. Need to give complete opening even on the OB Call, Failed to check further assistance - BOD Need to mention clearly to the cx that the cancellation of it isn't possible as the order was placed by redeeming the TC plan"
   },
   {
    "query": "Order Tracking / Status",
    "score": 40,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx was facing a delay in the delivery of her order since last 1 month and contacted us for the update on it JC had a check over the details and informed the cx to provide a grace time so that a prompt update could be provided. Timely apology missed, Delay follow up - BOD for NCF as per the screenshot shared. Missed to confirm the order ID (IVR transfer missed)"
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 88,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx wish to have the exchange done and JC Checked and informed the detals. Over all the JC handeled the call well but Cx was facing the issue and its an tech issue, JC Needs to owe more pology on call. Its regarding the LTE Product store drop and the pick up raised from Online is not able to close."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Pick up is not getting done from the last 2 weeks and New pick up has been raised and still pending, Cx is irate and JC informed that she will escalate and will hav ethe pick up done asap. Store Drop need to be checked with teh Cx. Need valid probing on call. Retention cant been tried since Cx is already irate, BOD."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx has raied an return and needs to know the update on the refund. Cx said that last time call was diconnected nd no call back done from our end. QC was completed on 09:41 and the call was received on the same day, BDD since timing not like AM / PM mentioned. Need to tag in refund or oters not in Credit Balance."
   },
   {
    "query": "Order Tracking / Status",
    "score": 81,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx needs the update on the Order delivery, # O8A1DFE6, SHAYA order and later call was connected with KHUSHI and order was cancelled. Dead air on call to be avoided. Hold on call needs to be worked on."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Order delivery is getting delayed and received failed delivery since Cx phone no is not reachable and Cx called the Courier person and he said that he cant delivered to Cx address and Cx is irate and needs the delivery asap. Ordrer was delivered. Apology and empathy a liitle needs to be there."
   },
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx had a order placed which was for a gist but didn't receive any gift wrap so she had a concern about it. Jc had a chekc and as per the on going ticket raised the concern. However need to use more of ownership phrase and follwo up with the concern team and ensure to provide her the resolution on it."
   },
   {
    "query": "Tresure chest / POP",
    "score": 95,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had a concern in regards with the TC active plan which wasn't visible in the app. Jc did the necessary porobing and helped the cx via a possible resolution to try. Also could mention about the payment via website, Missed to pitch for CSAT Rate of speech over the complete call need to be moderate, Avoid incorrect pronounciation with cx name/mail ID"
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had a concern in regards with the order given under repair were she was looking for the replacement. Jc missed to probe for the order ID however accurate info in regards with it was shared. Timely apology along with the better phrasing could have been done Missed to pitch for CSAT - BOD"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Retention Cx was looking to return her order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. Toh yeh product aapko acha nhi laga ma'am - Better phrasing could be done (Kish order ko refer kar rahe hai - BOD, 7-10 *working* days, Could have done pro-active probing in the bridge that was the return request raised/not)"
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx Order has bene marked delivered but not received by the Cx. CE raised for the redispatch and JC informed that she will be arraning the call back from the Senior since Cx asked for and call back done but NR. JC needs to owe paology for the delay in delivery and the mess happened."
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 60,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx product broke & she wanted refund or return The order was online order placed from I pad. JC failed to check on the same & gave incorrect information which made cx more irate. call did not go well with the cx & hence cx gave dislike, failed to check if Cx would like to go with LTE or LTB as she mentioned money back to buy something new."
   },
   {
    "query": "Digi Gold",
    "score": 75,
    "ncf": false,
    "date": "14 Sep",
    "comment": "Cx made a purchase of Digi gold via phone pay and contacted us in regards with it. Jc did the necessary probing and informed the cx to contact the Phone pay team. Could have apologised as well as tried to probe if she is looking to redeem it by making a purchase from CaratLane"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "15 Sep",
    "comment": "Cx order was delayed & cx opted for refund"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx contacted us to know about the delivery status of his order. Jc had a check and informed the timeline of it. Missed to pitch for CSAT - BOD"
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "18 Sep",
    "comment": "cx was not able to merge her old profile facing issue in exchanging the old products, JC informed a/c link is not possible cx was not very happ with the solution call needs to be more polished & provide crisp & clear solution"
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx has raised for MB and Cx needs to the delay reason for the pick up and JC checked and informed the update. Need to check with the Cx reason for the return and tried for exchange but missed. Retenion effor not found."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Return is getting delayed and Cx is irate due to the delay in pick up. # Q73E30EE due to the delay in Order pick up Cx is irate and needs the pick up of the Order to be done asap.. JC needs to owe empathy and apology for the delay happend and suggested store drop."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work!"
   },
   {
    "query": "Product Broken / Damaged",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work"
   },
   {
    "query": "Call audit",
    "score": 75,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Cx has the issue with the return of the product for LTB ad the pick up is getting delayed and Cx is looking for immediate refund too. Cx was irate and informed that the previous JCs on call was not helpful and JC informed the details with the Cx but JC sounded a tough on call and needs to avoided on call since Cx was facing issue with the refund and pick up and JC informed the process and over all the JC needs to work on tone and apology, empathy part. Finally the pick up done and refund processed. BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Cx doesnt like the product that she is not purchased from Store and JC suggested for 15 days exchange and POP EDGE amount has been utilized and JC informed the befinit details and etc. Cx asked on 15 days MB and JC needs to be more clear on informing the details like Store Orders MB is not possible. Need apoloigy since CX dont like the design."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    2,
    3,
    4,
    7,
    8,
    9,
    11,
    12,
    13,
    14,
    15,
    18,
    20,
    23,
    24
   ],
   "etq": [
    2,
    7,
    10
   ],
   "prob": [
    0,
    3,
    5,
    11,
    14,
    15,
    24
   ],
   "sol": [
    0,
    2,
    3,
    14,
    19,
    23
   ],
   "fu": [
    3
   ],
   "tag": [
    6
   ]
  }
 },
 "muzakirn": {
  "name": "Muzakir_N",
  "initials": "MN",
  "color": "#16a34a",
  "cq": 78,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 31,
  "params": {
   "ss": 16,
   "etq": 2,
   "prob": 4,
   "sol": 8,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 10 of 25 audits, for example on the Refund Status / Delay case (28 Aug). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 6 of 25 audits, for example on the Refund Status / Delay case (28 Aug). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Incorrect information flagged in 4 of 25 audits, for example on the Return Initiation / Request case (08 Sep). Verify before you commit. Check the SOP, the order status and any open ticket before sharing a TAT, policy or outcome."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx was asking regarding the SHAYA Cancellation and Cx informed that he wants the product to be delivered in an big box and if not he is not satisfied with the same and product he will be cancelling the product. JC needs to apology for the same ad Cx informed that he has not received any reply for the email. Need valid probing on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 44,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has received ony the refund for one product and not the other one. JC checked the details and Cx has placed an dpick up was done for the both products on the same box and JC informed that we need more time and will be updating the Cx once we receive an update. JC sounded monotonus and needs to more patience on call."
   },
   {
    "query": "General Policy Query",
    "score": 83,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had received a call from CaratLane which he wasn't able to receive it and so contacted us back. Jc did the necessary probing and trying to check over the details however no records were found so informed the cx to provide the order ID and as cx was driving he made us a CB later. Missed to apologise Tone need to be more gentle, Need to avoid the backgroubd sound to be heard on your call"
   },
   {
    "query": "Refund Status / Delay",
    "score": 95,
    "ncf": false,
    "date": "01 Sep",
    "comment": "CX had returned a product at the store and contacted us to know the status of her refund JC had a check did the necessary probing and raised the ticket as required Avoid long hold To avoid confusion always check for all the alternative profile before probing to the cx for the order ID Follow up delay - BOD for NCF as well as need to mention the approx refund timeline"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx wish to return the product in 15 days MB. Cx said that he has purchased from an another profile from store and JC tried for Retention but Cx needs refund only."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Over all a fine call"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx was facing issue with the product he has purchased. Repair process informed. Cx voice was nt clear."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx wants the Profule Balance to her Bank Account and call was transfered to Post sales. JC checked and informed the details like the Cx has used OG for the last purchase and the same isn te profile since the same cant been refunded. Tone needs to be more better and apology missed."
   },
   {
    "query": "15-Day Exchange",
    "score": 88,
    "ncf": false,
    "date": "08 Sep",
    "comment": "CX has raised an return on 27th Aug and now the Cx wish to have the product exchanged and the Online KF has been to be deleted and JC has spoken to the Cx and Store team and TAT informed. to raise the KF to SR to cancel the Online pick up. Need mre empathy on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 70,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had placed a order at the store which was ready to collect and contacted us to know about the pending amount which is to be paid. Initially missed to understand what exactly cx had a cocnern about, also need to use more of better positive phrase, Incorrect info about the offer communicated It's Flat 30% off on Diamond Prices (Opening sounded very casual also tone need to be more gentle, Avoid overlapping)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Retention Cx had a concern in regards with the pick up of her shaya order and so contacted us. Jc had a check and as required passed the necessary info and raised the request. Timely apology, Need to sound more gentle,BOD - Missed to share the Pick up AWB No., Need to use more of better phrases Initially reflected as Lack of ownership, Mention the timeline fo the pick up and refund clearly, Incorrect info about the complete timeline given"
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Retention Cx contacted us as he wanted to have his order cancelled. Jc had a check tried to retain him however as he wanted to proceed with the cancellation needful was done. Failed to portray Empathy when necessary, Name of the product incorrectly prounced, Better phrasing to be done"
   },
   {
    "query": "Store / TAH Complaint",
    "score": 62,
    "ncf": false,
    "date": "08 Sep",
    "comment": "Cx had a concern in regards with the exception which was provided to him. JC had a check could have probed for the order ID, missed to apologise and then based on the exception could have helped the cx by taking ownership and providing the digital brochure in regards July offer. However later had a word with the store manager to guide him accurately."
   },
   {
    "query": "GWD (Gold Weight Difference) Refund",
    "score": 62,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx was having doubts on GWD details and details shared by the Cx. Cx has raised on wrapping and message in the Order athe same was not fullfillied and JC informed to infor the store tema for the aame so that they can help the same. Need apology for the same which was happened. Store PIck up Order gift wrap wont be done. BOD."
   },
   {
    "query": "Tresure chest / POP",
    "score": 50,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx missed the payment in the last 2 month in CTC. wanted to know y there is an deductions JC had grammatical mistake also failed to understand what cx actual query was & adress accordingly"
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 75,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx is not able to make the Payment via BHIM App for TC. JC checked and informed the Cx that we had not received the Payment done by the Cx ad Cx needs to check with the Bank if the same has been retirned back to is Account and if not Cx needs to check with the Bank and if in case credited to CL TC will be updated iwth teh Sep month Payment. Need apology and empathy on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. As the request is been failed Kindly have it raised again"
   },
   {
    "query": "Credit Balance",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx had a concenr in regards with the credit balance which she was looking for the refund. JC had a check and informed that the same isn't possible however could have checked for the refund possibilites post deduction"
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 50,
    "ncf": false,
    "date": "18 Sep",
    "comment": "When the customer asked for a payment breakdown, the JC failed to provide clear details and gave ambiguous answers. Moving forward, the JC needs to enhance their understanding of customer queries and deliver more structured, customer-focused explanations. avoid multiple hold check all details & provide complete solution."
   },
   {
    "query": "GWD (Gold Weight Difference) Refund",
    "score": 50,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Senior Call back and JC took over the call and CX needs to know the GWD post repair and needs the refund update and jC informed that he will check and inform, JC spoke to Store team and informed to take the necesary stepts and raise an SR with Service Team for the GWD refund store team agreed nd Cx was satisfied but the JC initially informed that we will be placing an New order and will be delivering to the CX. Wrong infor shared BOD. Need more apology on call Valid probing on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx has placed an Order and the same is not delivered but marked as returned, SHAYA product. Wrong prodcct has been dispatched and Ms. Sanjana tried reaching the Cx but call was unanswered and SMS shared. JC informeed the RTO details and Cx needs refund, TAT missed, BOD Cx was irate. Cx needs refund and the KF has been raised for 15 days exchange, JC has raised the refund."
   },
   {
    "query": "Points / Loyalty Redemption (Xclusive / Encircle)",
    "score": 70,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx has placed 5-6 Orders and having issue or doubts on the Xclusive points received and JC informed that he is placing the call on hold and will get back the call was disconnected and JC missed to call the Cx back, Cx called us bck. BOD Cx was connected with Manika on call with in few mins, BOD."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "When the customer said \"mai 7 din se kya kar rahi hu fir\" on the 30 sec ob call, JC replied in a way that sounded robotic and not right in general, JC needs to work on his tone and manner.. Rest all was fine"
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call. Please keep the headset mic away, could hear a lot of breathing noise."
   },
   {
    "query": "Rush Delivery Request",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good call!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    18,
    19,
    21,
    22
   ],
   "etq": [
    1,
    3
   ],
   "prob": [
    0,
    12,
    18,
    19
   ],
   "sol": [
    1,
    9,
    10,
    12,
    13,
    14,
    17,
    19
   ],
   "fu": [
    21
   ],
   "tag": []
  }
 },
 "asrarahmedp": {
  "name": "Asrarahmed_P",
  "initials": "AP",
  "color": "#ea580c",
  "cq": 74,
  "audits": 25,
  "ncf": 0,
  "totalErrors": 44,
  "params": {
   "ss": 21,
   "etq": 8,
   "prob": 7,
   "sol": 7,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 13 of 25 audits, for example on the Shaya Product Quality Issue case (03 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 5 of 25 audits, for example on the Return Initiation / Request case (10 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 4 of 25 audits, for example on the Return Initiation / Request case (10 Sep). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx has placed an Order for 2 skus and the same is getting delayed than the EDD and Cx has received an SMS or upfate from BD courier that same is getting delayed and Cx needs the Order to be delivered on 2/th Aug since its an Gift for Rakki. JC informed that he will raise the issue and will get the issue resolved but Order is not delivered yet."
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx wants to know the exchange value, Cx has placed an Order using the LTE amount and CX needs to know whether she is placing an New order with the lower amount she will be getting the amount in full or any deductions will be there or not. JC informed the details."
   },
   {
    "query": "Order Tracking / Status",
    "score": 81,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx contacted us to know the status of his order. Jc had a check over the details and provided the accurate details of it to the cx. Missed to apologise and need to avoid long hold (Could have initially informed to keep the cal on Hold while checking for the details)"
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had a concern in regards with returning a product at the store. Jc had a check and informing the cx to have the call passed to the store team so that necessary guidance could be given to them and help the cx on it. Missed to apologise later as call was disconnected CB was done for which SMS was to be sent."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx wish to return the product and will be visiting the store for the same. Cx said that she will be making the product will be packed and will take the video of the packing and will have the product returned. CX said that she will be dropping the product in the store and with in 18th Sep, needs 20+ days extention for the same and JC informed the same ca been done, BOD. Need to CE and get the same approved."
   },
   {
    "query": "Return Initiation / Request",
    "score": 62,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx needs the update on the Order delivery, Order is getting delayed and no apology and empathy on call. Return raised for an another SKU but no Retention on call and apology seekes since Cx said that te product is not worth for the cash paid."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 50,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx has not received any update on the Order delivery SHAYA product, Product is defective and the same SKU cant been delivered and its an bogo Offer. No empathy or apology on call. Cx wish to have the Order returned back JC informed the Cx to raise from CL APP where as the JC could raise the same. No retention efforts on call."
   },
   {
    "query": "Repair Request",
    "score": 62,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx said that the Order # UC3EA443 pendant has been broken and JC informed to drop the product in the store for repair and approx charges informed. Cx was not happy with the same since the poroduct is broken. Cx wants the producg to be make more harder. JC needs to owe empathy on call for the thing happened. Need more Listening/Understanding skills on call."
   },
   {
    "query": "General Policy Query",
    "score": 81,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx needs to know the TC redemption. Cx was looking for early redemption since his Wife Bday is on Sep. JC informed the details. Bday wishes needs to be conveyed."
   },
   {
    "query": "GWD (Gold Weight Difference) Refund",
    "score": 81,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx contacted us to know about the GWD against a order recently purchased. JC had a check over the details and provided the required info. Invoice mai bhi wahi hum mention kiye hai - need to sound gentle, Aur kum hona chahiye sir? - better phrasing and explanation could have been given. Missed to pitch for CSAT"
   },
   {
    "query": "Refund Status / Delay",
    "score": 62,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx had retunred her product to us and contacted us to know the status of the refund. Jc had a check over the details and informed the accurate info on it. Timely apology missed as well as initially cx had to seek response Missed to pitch for CSAT, Irrelevant probing done - How may I help you today even when cx already mentioned her query ( 5-7 *Working* days)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 94,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Retention Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. Failed to check further assistance"
   },
   {
    "query": "Return Initiation / Request",
    "score": 55,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Retention Cx was looking to return her order and so contacted us. Jc did the necessary probing, raised the ticket as well as request as required Missed to apologise, Need to avoid long hold, Lack of ownership in regards with the return of the Pratoli Earrings in Oxidised 925 Silver reflected Failed to probe as well as retain for that order"
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Order Cancellation call, Cx has placed an Order and wish to cancel and place a New order due to price change and JC cancelled the Order and New order has been placed. Cx was using TC and needs to know reading the discount part JC clarified the details but needs to inform the details in a more better way and interption on call needs to be avoided. BOD."
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx ordered for 10 mm earings 2 pair & received one pair wrong size. As this was rakhi gift cx reched out to us 18 Aug for the same & still not rectified She do not have the requirement anymore wants refund. Jc sounded monotonus there was no proper acknowledgement on the call dead air lack of ownership, As a senior agent should have handeled the cx more promptly."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "15 Sep",
    "comment": "cx order was delayed he wanted an update JC informed store team will get back."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx has placed an SHAYA order # EZCHNHO3408O-AM and the same has been cancelled due to back end issue and JC informed that the amount has been added to Cx profile and Cx can make yhe New purchase but where as the Cx was not interested in any purchase of now and needs refund. Refund raised. Need more empathy on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx was looking for the refund of the product and anotehr JC nformed that MB is not possible and exchange can been done and raised for exchange and Cx has placed an New order and the same ha sbeen delivered and now she wants the same to be retirned as well and JC informed that due to tech issue the KF cant been raised and will raise the same once the issue is resolved and Cx was asking for email cofirmation JC informed that the same will be automatically shared. JC has raised an Ticket and its WIP and once the Old KF has been closed the New KF will be raised. BOD."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 81,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx contacted us to know about the delivery status of her order given for repair Jc had a check over the details and got connected to the store by arranging a CB for the store Failed to portray Empathy when necessary, Avoid long hold"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Retention Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. Failed to portray Empathy when necessary, For online order need to confirm the complete order ID"
   },
   {
    "query": "Order Tracking / Status",
    "score": 62,
    "ncf": false,
    "date": "18 Sep",
    "comment": "cx order was canceled tech issue she requested for call back from senior JC sounded monotonus & rude. also did not call back as the call got disconnected, cx was alredy irate should have handeled more polished way (Sep 08, 26 19:02:45) cx did not feel she was talking to a tenured person."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 62,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Cx wants to know regarding the LTB Calculations and pick up related clarifications. Finally Cx said that he will be visiting the store for the LTB and JC assisted the Cx well. Over all the call was fine but missed to pitch CSAT,BOD."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Order delivery status and Cx is irate due to delay in delivery of the Order, JC checked and informed the excepted TAT nd over all the call was fine."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Marked delivered but the CX has not received the delivery of the order, JC checked and informed the detalils, Need apology on call. JC informed that he will raise the issue with the Logisitics and investigate the issue since the Order has been dispatched via Speed Post. TAT informed."
   },
   {
    "query": "Store Complaint",
    "score": 62,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has raised an cancellation for the Store Order and due to delay in delay in delivery Cx wish to have the Order cancelled. JC informed that he will inform the store team to get the same done. Need apology and empatgy and seek reason for the cancellation."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    10,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    23,
    24
   ],
   "etq": [
    2,
    8,
    9,
    10,
    11,
    12,
    18,
    21
   ],
   "prob": [
    5,
    10,
    12,
    14,
    19,
    21,
    24
   ],
   "sol": [
    4,
    5,
    6,
    7,
    12,
    14,
    20
   ],
   "fu": [
    3
   ],
   "tag": []
  }
 },
 "manikac": {
  "name": "Manika_C",
  "initials": "MC",
  "color": "#4f46e5",
  "cq": 74,
  "audits": 11,
  "ncf": 1,
  "totalErrors": 18,
  "params": {
   "ss": 8,
   "etq": 3,
   "prob": 1,
   "sol": 3,
   "fu": 1,
   "tag": 2
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up · NCF",
    "text": "1 NCF this month on Lifetime Buyback (LTB). Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 5 of 11 audits, for example on the Lifetime Buyback (LTB) case (01 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Long hold / delayed chat response flagged in 3 of 11 audits, for example on the Return Initiation / Request case (03 Sep). Keep holds under 45 seconds and chat responses prompt. If you need longer, come back and update the customer."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "EDD has been revised and Cx is irate due to the same. Cx has placed an Order and the same is getting delayed in delivery and the Order has been placed for festival. Cx is irate due to delay in delivery. JC informed to visit the store and purchase the similar designs since the product placed by Cx is not available in stores. RTO raise and TAT informed. Need positive phrases on call, BOD."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Delay in delivery of the Order and Cx needs to know the stauts of the Order. Dead air needs to be avoided. Wrap time out. Cx said that its an Gift and needs the delivery of teh Order with in 12 pm if not he wish to hav ethe Order cancelled."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx needs the delivery status of the Order and JC checked and informed the details. Dead air on call needs to be avoided. JC informe the Order will be delivered o 28th but the Order has dispatched from Mum to AP on 28th Aug, BOD."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx needs to know the delivery status of the Order # EZHYDPNG5487I-JR and Cx has given the product for repair an month ago. JC informed that she will raise the complaint and make sure the redispach will be done asap. Hold on call needs to be worked on. BOD. More apology needed on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Return raised but the same has been rejected and Cx feels its small and not suiting her, Retention tried but Cx needs refund only. SV informed."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has raised for the return and JC checked the reason, Cx didnt liked the product. Cx feels like itts an used product JC was suppose to address the same but Cx needs refund only and pick upm confirmed and TAT informed."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx missed a call, Call was done for the Failed delivery need empathy on call forthe delay caused."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 0,
    "ncf": true,
    "date": "01 Sep",
    "comment": "Cx had placed a return request online but visited the store to return it and had a concern there so contacted us for it. Jc started to probe however as the call was disconnected and the JC missed to CB hence NCF Missed to apologise as well."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx had a store order cancelled and contated us to know the status of refund Jc had a check over the details and as required arranged a CB from the store so that a update could be provded by them. Missed to apologise, Avoid long Hold, Pronounce the correct name of the product"
   },
   {
    "query": "Return Initiation / Request",
    "score": 62,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx was looking to return his order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return at the store accordingly info was passed. Missed to inform that he need to visit the store within 15 days from the date of delivery Avoud long hold, Missed to pitch for IVR, Irrelevant probing asking again which product which he wish to return"
   },
   {
    "query": "Dislike",
    "score": 75,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx order custom jewelelry on 29-07-2026. till sep this product was not delivered multiple dead line miss so cx was annoied & gave dislike. cx denied for repair wanted the product to be sent back but it got repaired now cx does not want to pay as she denied the repair. JC failed to understand the same gave random answers."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    6,
    7,
    8,
    10
   ],
   "etq": [
    8,
    9,
    10
   ],
   "prob": [
    9
   ],
   "sol": [
    2,
    7,
    9
   ],
   "fu": [
    7
   ],
   "tag": [
    1,
    8
   ]
  }
 },
 "umraf": {
  "name": "Umra_F",
  "initials": "UF",
  "color": "#0f766e",
  "cq": 73,
  "audits": 30,
  "ncf": 3,
  "totalErrors": 43,
  "params": {
   "ss": 21,
   "etq": 1,
   "prob": 6,
   "sol": 10,
   "fu": 2,
   "tag": 3
  },
  "aois": [
   {
    "cat": "fu",
    "label": "Follow Up · NCF",
    "text": "3 NCFs this month on 15-Day Exchange, Order Tracking / Status, Reverse pick up / delay. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 14 of 30 audits, for example on the 15-Day Exchange case (03 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 10 of 30 audits, for example on the Order Tracking / Status case (17 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "EDD missed and Cx has not received the delivery and Cx received an SMS informing that Cx phno was not reachable and Order cant been delivered. # MDE7062D Order is OFD, JC checked and informed the details. JC informed the Cx that the Order will be delivered and no apology for the delay and empathy on call."
   },
   {
    "query": "Store Complaint",
    "score": 62,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has faced an issue with the CL Saharanpur store related to Teej Festival Mehandi event and he has raised an email for the same and not received any update. Cx needs an update on the same. JC informed the Cx to drop an email to grievance email but the JC was suppoose to check the details and email and work accordingly."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx was facing the issue with the Order delivery and JC checked and informed the Cx on the delivery update of the Order but Cx was leaving the delivery addess on the same day, JC checked and informed that Order cant be delivered on the same day and address change cant been done and RTO raised. Amount will be vredited to the Cx profile and Cx will be placing a New order later. Need more apology on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 62,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has placed an Order and its two SKUs and Cx needs the delivery asap. One of the product is delivered and anotger one is getting dispatched from Pune and getting the same dispatched from Mum FC and CX said that the same prodiuct is i Bangalore location and the JC was not able to assit the Cx. JC was suppose yo check the Barcode availabiliy in BLG FC and cancel the Order ad place a New order and assing the BLG Barcode and make the Order delivered to the Cx. Lack of Ownership and process knowledge."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Retention Cx conatcted us as she was looking to return one of her shaya product to us. Jc had a check over the details and approved the request as required. Timely apology, Avoid using internal jargons like FC spell it facility center Better pitch for retention could have been made by initially informing that post pick up the amount would be added to the profile from were she can redeem it on a new jewellery, 3-4 *Working days, Also need to mention about the Qc which is been done"
   },
   {
    "query": "Repair Status / Logistics",
    "score": 50,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx has given the product for repair on 25th July and Cx has not received any update on the delivery of the Order post repair. Repair completed on 26th July and JC needs to be a more clear on call and Cx is getting confused. JC needs to inform the correct detais with the Cx and since the Cx needs a SENOIR CALL back JC informed that she iwll be arraning the same."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has raised an LTB and pick up is not picked up. JC checked and raised the SR and informed the pick up wil be done asap. SV needs to be suggested."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 100,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx contacted us to know about the pick up status of her order. Jc had a check and raised the ticket as informed to the cx. Avoid using the word escalated unless required to escalate it"
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had a order placed using the PB were the excess amount was not been paid Jc had a check over the details and informed the cx that as this order would be auto cancelled menawhile she could have a new order placed Timely apology, Avoid Overlapping, Avoid mentioning to keep the call on hold for 2 min"
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 75,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx contacted us as he was looking to return his product under LTB. JC did the necessary probing and informed the cx about the values as per bridge and asked the cx to visit the store. Sir aap exchange mai jaa sakte ho naah sir, Always use the word approx while mentioning the LTE/LTB values, Used ho ya unused ho as per the policy aisha hi hota hai, Making & GST nhi milega - Better phrasing Could have probed to the cx that would he wish to go for the online / store return rather than directly asking the cx to visit the store,Incorrect / incomplete information about the return at the same store is only possible given once Could avoid long hold - BOD"
   },
   {
    "query": "Tresure chest / POP",
    "score": 81,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx had a concern in regards with the TC redeemption at the store and so contacted us looking for the cancellation of it. Jc had a check did the necessary probing and as the same wasn't possible informed on it. Could use better phrase while communicating about the TC refund not possible as well as Digi Gold conversion Could have aapologised timely, Incorrect disposition"
   },
   {
    "query": "15-Day Exchange",
    "score": 0,
    "ncf": true,
    "date": "03 Sep",
    "comment": "Cx wants to return the product # X-FB243101 and its an 15 days Order amount has been used in the Order and Cx ha spaid balance amount via Pay U. JC informed the sanme cantt been done Cx was irate and needs call back to be arranged or speak with the senior. JC needs to inform the details and make the Cx understand rather than arraning a call back from the seniro. BOD. No empathy on call. Tone needs to be worked on. NO call back arranged."
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 88,
    "ncf": false,
    "date": "04 Sep",
    "comment": "Cx had placed a order were the payment wasn't successfully processed and so cx contacted for it. JC had a check did the necessary probing done and provided the required info, Later to have a new order placed call was transferred to pre sales team. Avoid overlapping, When we don't receive it-okie, Could have additionally mentioned that in certain cases the order get auto cancelled in an hour or so but max. 24 hours - Better phrasing"
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Repair Charges related, # EZBLRMMRA859X-JR, WA connectivity informed. Cx wants to know the repair charges, Cx said that she has dropped the product in store last 20 days before and getting delayed. Charges was updated by back end on 04th Sep. Delay apology missed."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 0,
    "ncf": true,
    "date": "09 Sep",
    "comment": "Cx had received a empty packet and contacted us to know about it. Jc had a check Missed to understand that it would be TP bag. Missed to check that cx had raised a return request against which TP was delivered to her #EZHYDIBMCA37A-JM, Could try to fetch for few details for via the AWB no. as well, Incorrect Dispostions selected (Background noise was loud)"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx is not able to make the Payment of TC and she has done the payment for the same going ahead and JC informed the details."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx needs to know regarding the SHAYA Order delivery issue, # G9749170. Its an GIFT Order and Cx needs the deliver of the Order asap. JC informed that she will make the delivery attempted asap."
   },
   {
    "query": "15-Day Exchange",
    "score": 62,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx wanted to return the shaya jewellery. as it was flimsy JC made the cx repet & suggested to visit store without checking the avaiblity of shaya"
   },
   {
    "query": "Store / TAH Complaint",
    "score": 90,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had a TAH appointment booked and as no one had reached out to her she contacted us. Jc had a check apologised and arranged a CB from the concern team. Also could have apologised while mentioning that the TAH team isn't directly available at the moment for you to get connected and need to use better phrasing"
   },
   {
    "query": "15-Day Exchange",
    "score": 50,
    "ncf": false,
    "date": "17 Sep",
    "comment": "CX has purchased an product and wish to have the Order wish to have the product returned back in 15 days MB and JC pictched for Retention and Cx informed that she would like to visit the store and go with an exchange where asit was an SHAYA product and JC has raised the pick up for 15 days exchange too. BOD and need apology and empathy non call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "17 Sep",
    "comment": "Cx was trying to place the Order and the Payment was failed and now Cx is not able to place the Order, JC checked and informed the details. JC informed the Cx that post 24hrs the Order will be cancelled and post that Cx can go a head and place the Order, wrong info."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx wish to place an New order and also the product that she has order and delivered to her needs to be picked up. JC informed that the same can picked up in 15 days exchange and once the amount has been added to teh Cx profile Cx can go a head and place the New order."
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "18 Sep",
    "comment": "The customer requested a refund because the delivery partner could not locate the address. The JC missed checking for further assistance and failed to communicate the refund TAT. The JC needs to improve proactive problem-solving and ensure mandatory timeline disclosures are made to avoid repet call"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx wants the delivery status of the product Cindercyclone 925 Silver Diamond Necklace SKU: BR00831-SSS3RE and jC checked informed the update bt due to deliay in delivery Cx wish to have the same cancelled. Cx wants the RTO to be raised immediately on call and update her JC raised the SR for the same. Need more apology on call."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Order Delivery status # N0B52F9C SHAYA order, JC checked and informed the update. apoligy and positive phrases neesd to be used on call for the Delayed delivery."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Call was connected to JC as the Cx wish to speak with JC, Cx alism that she has not received her complete refund and its was na CC payment and JC checked with the Cx for the statement and Cx was irate and later Cx called us and the same was shared with the jC. Need positive phrased on call and empathy."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has raised an return since she dont like the product and JC informed the TAT for the TP delivery and will make sure the delivery done asap and will amke sure the pick up done asap. Need apology and empathy on call since the Cx doesnt liked the product. No Retention effort on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has raised an pick up and the pick up is not done. Cx needs the pick up to be done asap and JC informed that pick up will be done asap. Later JC called informed that the pick up cant been done in the given address Cx can share otehr address for te pick up but Cx said that the pick up is done and JC checked for the AWB no on WA yet to be shared by the Cx. JC needs seek paology since the pick up cant been done from he Cx location and since Cx said that the pick up is done already JC needs to check on the Courier Patner name and other details."
   },
   {
    "query": "Call audit",
    "score": 94,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work, JC miscommunicated but corrected herself before cx pointing it out. JC was empathethic and had excellent tone and manner. Tagging however could be better, instead of moneyback its tagged as LTE. Aoid saying \"yahi bata sakte hai mai sun rahi hu\" for feedback. Frame it better, will share tips during feedback sessions."
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good call! The closure for feedback was too quick. Please work on the rate of speech for this."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    5,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    17,
    18,
    19,
    20,
    23,
    24,
    25,
    26,
    27
   ],
   "etq": [
    22
   ],
   "prob": [
    3,
    5,
    6,
    9,
    14,
    27
   ],
   "sol": [
    1,
    4,
    5,
    11,
    14,
    17,
    19,
    20,
    22,
    26
   ],
   "fu": [
    11,
    14
   ],
   "tag": [
    10,
    14,
    28
   ]
  }
 },
 "adeebh": {
  "name": "Adeeb_H",
  "initials": "AH",
  "color": "#9333ea",
  "cq": 72,
  "audits": 25,
  "ncf": 4,
  "totalErrors": 36,
  "params": {
   "ss": 16,
   "etq": 4,
   "prob": 6,
   "sol": 4,
   "fu": 3,
   "tag": 3
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "4 NCFs this month on Order Tracking / Status, Product Broken / Damaged, Return Initiation / Request, Shaya Order Status / Tracking. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 10 of 25 audits, for example on the Order Tracking / Status case (01 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 5 of 25 audits, for example on the Shaya Order Status / Tracking case (06 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "28 Aug",
    "comment": "IB Call was disconnected and JC called the Cx back and Order delivery issue. # F75C70F3 SHAYA Product delivery issue, Cx informed that he has upfated the address and since the same is not upated and call was disconected and JC called the CX again but no response. JC Called the Cx again and informed the update. Ownership miising and need empathy on call."
   },
   {
    "query": "Shaya Wrong product recieved",
    "score": 100,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx has received an wrong product and JC informed the Cx on the retuin part product cant been returned to store since its an Wrong product delivered and Only line pikc up can been done. # M3348E3C but the JC was suppose to raise the PD and check with the CX if the Cx is planning to visiot the store which store she wants to visit and drop an email for the same.Ticket Raised fir delivery confirmation and in follow up for raiseing PD."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx said that from his Bank account amoumnt is getting debited from hs Bank account for DG and JC informed the Cx to check with Phone per for the same. Need empathy on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "01 Sep",
    "comment": "Cx had a concern in regards with the delivery of her order so contacted us. JC had a check over the details and raised about the concern in the ongoing ticket. However as per the tracking the product is on it's way to chennai FC and not banglore so as per that incorrect infor given Hence NCF Timely apology required, Avoid dead air"
   },
   {
    "query": "Reverse pick up / delay",
    "score": 80,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx was facing a delay in the pick up of her order was irate about it and so contacted us JC had a check over the details and raised the concern in the ongoing ticket. Avoid overlapping, Avoid mentioning to keep the call on hold for 2 min as well as avoid long hold Missed to probe that did he receive any call from the FE for pick up Disposition for this case was to be RVP - Delay"
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Pick up has been done but Cx needs the product back to her address and no refund needed. Email going on for the same : Regarding re-dispatching Order #EZHWHAVMD8FDL-JM. JC needs to owen more empathynon call for the delay happening."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Order delivery confirmation and cX has not having the Mobile no that he has used for placing the Order and JC checked and informed the details. Order delivered. Cx Order for pendant and Cx thought that its comes along with the chain. JC informed the details. Empathy missed."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "05 Sep",
    "comment": "MTO order and Cx complints that the same is gettin g delayed and JC informed the delay is due to its MTO order, Cx needs the Order delivery of the Order asap and the Order is in Transit now. Failed to use positive phrases."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 0,
    "ncf": true,
    "date": "06 Sep",
    "comment": "Cx contacted us as he was facing a delay in the delivery of her shaya order. JC had a check informed that would have the concern raised - BOD for NCF Incorrect info in regards with the refund possibilities on this order was given., Lack of ownership Timely apology missed, Sounded too casual when cx asked how are u, Aap batao, Need to use more of better positive phrases"
   },
   {
    "query": "Order Tracking / Status",
    "score": 85,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx was facing a delay in the delivery of her order and contacted us to know the satus of it. JC had a check and as required raised the concern via mail. Could avoid dead air, timely apology with bette rphrasing, Incorrect Dispostions selected (Long hold - BOD)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx was looking to returne her order and so contacted us. Jc had a check over the details did the necessary probing tried to retain the cx however as cx wanted to proceed with return needful was done. (Better phrasing for retaining the cx could be made, Avoid skipping to mention about the QC check)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 0,
    "ncf": true,
    "date": "06 Sep",
    "comment": "Cx had a concern in regards with the return of her shaya product were she had returned us two product against one return request JC had a check informed that the product have reached us however as required no request for the refund to be processed found. Missed to confirm the order ID, Is this the first time you have called us, Avoid long hold"
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx has done with the purchase of E GOLD and call was trasfered to PS, JC checked and informed the details. TAT informed. Need apology and empathy on call and Interption needs to be avoided."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx has placed an Order and with in 3 days the diamonds is missing in the product and Cx wish to have the product returned back and SM in the store was not able to do the same and JC has spoken to the SM and informed to raise the CE and once appoved the product can been returned and CE raised and return taken. Need more apology and empathy on call since teh x was facing issue with the product."
   },
   {
    "query": "Order Tracking / Status",
    "score": 62,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Order delivery status, JC informed the TAT for the Order delivery and need apology and empathy on call for the delay happened and Cx asked the JC that if not delivered and the JC informed that refund will be issue and Cx was irate post heairng the same, JC would inform that he will arrange the delivery for he product asap."
   },
   {
    "query": "Store Complaint",
    "score": 75,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Cx has placed an Order # EZNGPPTND8FCG-JM and the same has been delayed already and once the Order is delivered, Store team misbehaved with the Cx and Cx wants to have the Order to be cancelled and needs refund. Cx said that Manager of the Store was too rude. Store team was asking the [product size with the Cx. Need a little more owner ship and apology on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx contacted us in regards with the refund agaist two product. Jc had a check and provided the required info. Always ensure to confirm the order ID in the beginning of the call Incorrect Dispostions selected -"
   },
   {
    "query": "Digi Gold",
    "score": 69,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx had a concern in regards with Digi gold selling JC did the necessary probing and provided the required into to the cx however as cx wanted the refund at the earliest need to apologise avoid mentioning about the refund timeline of other brands unless until required Avoid to interrupt and use better phrases, Incorrect Dispostions selected"
   },
   {
    "query": "Order Tracking / Status",
    "score": 65,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx had a concern in regards with the delivery of her order so contacted us. JC had a check over the details and raised about the concern in the ongoing ticket. However as per the tracking the product is on it's was to chennai FC and not banglore so as per that incorrect info given. Timely apology required, Avoid dead air"
   },
   {
    "query": "Tresure chest / POP",
    "score": 75,
    "ncf": false,
    "date": "18 Sep",
    "comment": "The customer inquired about a CTC withdrawal, and the agent explained that the amount was non-refundable. However, the explanation lacked clarity for the customer. The agent needs to deliver a more refined response. Additionally, the agent appeared distracted during the call, requiring the customer to repeat themselves"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "18 Sep",
    "comment": "cx felt the diamond was not suting so wanted refund of the product JC assisted the cx with all policy."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Cx informed that the product was not delivered as per the WS and post placing the Order again and again Cx has received the wrong product. Cx needs the refund now not LTB. Since its an Store Order, JC informed that he will check with store team and will get the issue resolved. JC needs to check the product the cX is picked up or yet to be picked up from the store need to check images from the Store team and issue faced by the store team. Need valid probing on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "21 Sep",
    "comment": "Cx needs to know the status on the Order delivery, EDD missed. JC checked and informed the details and order was delivered on the next day 20th Sep."
   },
   {
    "query": "Product Broken / Damaged",
    "score": 0,
    "ncf": true,
    "date": "22 Sep",
    "comment": "Customer placed an order under order ID - (Order ID:P919F0DD), within a month of span the order was damaged, the customer initiated a replacement but the replacement was damaged as well, Internally store raised an ITR that as well was damaged. Adeeb had given commitments regarding a full invoice refund as well as possiblities of same offer post expiry. None of these are possible. The customer was redirected to the store and it was told to the customer that these exceptions are possible, the store hsa to take an approval from their RM, Adeeb informed he will take self ownership, during the summation when the customer notified that she will either go with a different product with the same offer or a complete refund, adeeb did not correct her on the refund possiblities. Adeeb said \"sure\" and notified that he will call her back within 24 hours. Missed to call the customer back. No call logs on ameyo found for Sep 11, until his shift end of 11-8. Customer reached out herself on Sep 12. Further frustrating the customer, the customer on this call stated lack of trust with CL considering all her experiences. When adeeb finally spoke to the customer, he appeared to not remember the case further iRating the customer. Adeeb asked the customer time to check and then kept the call on hold without informing the customer. Then adeeb proceeded to explain the store vs online communication gap to customer to protect his name and ownership in customer's prespective which was not needed. Cutomer was further iRate and notified to take legal action. Kept the call on hold again without notifying the customer. Post hold again adeeb informed the customer that he has spoken to the store manager and they are seeking an approval for a refund or new product, but the customer does not want a replacement. Then proceeded to interrupt the customer mulitple occasion, customer was finally frustrated with adeeb and started raising her voice. To which adeeb notified that \"if it was an online order we would have etc etc\" but it was adeeb who gave commitments in the first place. The call was handled pathetically to an extent that we lost a customer."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Good call, was unable to fetch the info right away, notified the customer that he will callback by today EOD. Make sure to follow up on the same."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    3,
    5,
    6,
    7,
    8,
    9,
    12,
    13,
    14,
    15,
    17,
    18,
    19,
    23
   ],
   "etq": [
    3,
    4,
    18,
    23
   ],
   "prob": [
    3,
    4,
    11,
    14,
    18,
    21
   ],
   "sol": [
    3,
    8,
    18,
    23
   ],
   "fu": [
    8,
    11,
    23
   ],
   "tag": [
    4,
    9,
    17
   ]
  }
 },
 "raghuvanshr": {
  "name": "Raghuvansh_R",
  "initials": "RR",
  "color": "#c2410c",
  "cq": 68,
  "audits": 30,
  "ncf": 3,
  "totalErrors": 51,
  "params": {
   "ss": 19,
   "etq": 4,
   "prob": 8,
   "sol": 13,
   "fu": 2,
   "tag": 5
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "3 NCFs this month on 15-Day Exchange, General Policy Query, Order Tracking / Status. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 15 of 30 audits, for example on the General Policy Query case (28 Aug). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 6 of 30 audits, for example on the Order Tracking / Status case (02 Sep). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Order Confirmation",
    "score": 62,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx has made the Payment for the Order but to SYNC issue the Payment is not updated and the Order is not yet confirmed. JC needs to seek apology and show empathy on call. JC was checking the details and JC was suppose to check the Payment has been received by us or not but missed and then the JC was suppose to raise the SR. BOD."
   },
   {
    "query": "Order Tracking / Status",
    "score": 69,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has placed an Order for 4 products and marked RTO, Cx informed that the Phone no was updated wrongly in the app and the Order is returned back to us. JC checked the details and informed the update to the Cx. Call was on hold for 3-4 mns, Need more empathy on call and apology. JC informed that he wil check with the back end and ocnfirm on the RTO with in 24-48 hrs."
   },
   {
    "query": "General Policy Query",
    "score": 0,
    "ncf": true,
    "date": "28 Aug",
    "comment": "Cx claims that he has received an wrong product, apology missed on call. Dead Air where Cx seeks response. JC informed the Cx that he can go with the Store and make an immediate purchase in 15 days exchange or iwll be rasing an online pikc up but where as there wil be an investigation for the same post taht only the process will be completed. Wrong inform shared."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 50,
    "ncf": false,
    "date": "28 Aug",
    "comment": "Cx has purchased an SHAYA Product and looks old or Tarnised. No apology or empathy on call. JC checked for the repair but the same is not in process TAT informed Cx needs the same to be returned bit JC would check the images of the product and pictched for exchange but missed and no Retention effort on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx has raised an return for the product and JC checked for the reason for the return and Cx said that the product is too small in size and he wish to have the same returned. JC sound like questing the Cx ad no Retention effort on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 70,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx was irate due to delay in delivery of the Order and wants to have the Order to be cancelled and proceed with the refund. JC informed the TAT but x wa sirate and asked to cancel the Order. Order marked RTO and refund TAT informed. Tone needs to be worked on and call was on hold for 6 -7 mins and disconnected an dJC called the Cx back."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 62,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx had a shaya order which was faded within 1 week and requested for the replacement of it. Jc did the necessary probing and as required raised the return request. Missed to apologise as well as lack of ownership when informed to the cx that once amount is added call us back and we would have a new order placed for you. (Need to add the alternative no. in the one view, Dispostions - BOD)"
   },
   {
    "query": "Return Initiation / Request",
    "score": 40,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Retention Cx had raised a return request and contacted us to know the status of it. Jc had a check over details and as the request was already raised informed the same however avoid interrupting the cx as well as rate of speech need to be moderate Could have pitched for retention, Incorrect info about the pick up process mentioned Also as the call was disconnected could have called her back - BOD for NCF"
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "02 Sep",
    "comment": "Cx contacted us to know the status of her order. Jc did the incorrect probing and as per that incorrect info communicated due to which cx was not satisfied with out service. Also missed to apologise for it, Lack of ownership"
   },
   {
    "query": "Digi Gold",
    "score": 80,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx had a concern in regards with selling Digi gold purchased via Paytm. Jc did the probing however relevant probing like when was it purchased could have been done as well as could have helped the cx by providing the Paytm customer care no."
   },
   {
    "query": "General Policy Query",
    "score": 80,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx had made a purchase via store were she had a issue with name in the invoice. Jc had a check over the details and as the store team was to look into this had a check and informed the same. However additional ownership on it could have been taken. Timely apology with better phrasing was required."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx had a concern in regards with the delivery of his order. Jc had a check did the necessary probing however raised the concern in the ongoing ticket Timely apology along with better phrasing could have done else the query was well handled"
   },
   {
    "query": "15-Day Exchange",
    "score": 0,
    "ncf": true,
    "date": "07 Sep",
    "comment": "Cx needs the upfate on the exchange Order and JC informed that he will check on the same p,aced the Order on hold, later call was disconnected and JC missed to call the CX. Cx called us on the next day for the same issue."
   },
   {
    "query": "Return Initiation / Request",
    "score": 38,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx wish to have the product returned and JC took a longer time to check the details and call was on hold and CX said that there might be an defect in the product and JC informed post QC the same will be confirmed. JC was suppose to check the details of the product in Pic or email then do te needful. No Retention effort on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 85,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had a concern in regards with the delivery of her order and so contacted us to know about it. Jc did the necessary probing and raised the ticket as required. Avoid overlapping, Timely apology, I think so it will be delivered by tomorrow - better phrasing Incorrect Dispostions selected"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 38,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx needs to know the delivery status of the Order and email going on - Regarding broken product received against invoiced for Order #J5DDEAB1, JC informed he will check and update the Cx. No apology and empathy on call. Call was on hold for 4 -5 mins. JC informed that he will place the replacement Order and amount wll be addred to the profile. No return raised and neithe New Order placed. Exchange confirmation yet to be shared since BOD. JC missed to infor the TAT to the Cx."
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx has placed an Order for return the sam eis not picked up and needs the update, Size Issue. Retention tried from JCs end. Due to delay in delivery Cx wants to have the Order picked up and not willing to place an New order. Deliver status of the Order informed. Dead air on cal to be avoided. Need apology on call. CSAT Missed on call."
   },
   {
    "query": "GWD (Gold Weight Difference) Refund",
    "score": 88,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx wanted to understand abt the GWD & as the calculations were diff for the cx to understand cx was irate & wanted to cancel the order. Jc should have simplified it more while explining it to cx."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 75,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Return request was raised and cx contacted us to know about the pick up status of it. Jc missed to probe and provvide the required info however infomred that he would have a concern raised to the back end team. (I'm raising a ticket, Is that okay)"
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx has placed an Order from the Store and Payment done # EZDDNDDM2822H-JM Cx said that she was facing issue with the order delivery and needs assistance, JC informed the Cx that he will be arraning an call from the Store so that the issue can be resolved. Need to owe apology for the issue faced by the Cx and empathy missed on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx has raised an pick upfor her Order and the same is not yet picked up yet and Cx is worrired and needs the pick up asap. JC checked and informed the details and TAT for pick up has bene informed. Need more paoligy and empathy on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Order delivery query and Cx needs the delivery asap since Cx is travelling and needs the delivery of the order on the same day. JC followed with the Store team and Cx visited the store and pick up done. Over all a fine call. Tagging missed on follow up call."
   },
   {
    "query": "General Policy Query",
    "score": 83,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has placed an Order for SILVER COIN and not received the same. CX wish to place an Online FIR and needs assistance for the same. Need apology on call. JC share the Toll free for assistance for filinmg the FIR."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx wants to book an appointment for TAH for the next day and the Cx called us on 10.30pm where as the JC informed that he will arrange a call back on the next day and accordingly the TAH can been booked but Cx was not fine with teh same and JC needs to inform the CX that TAH appointment cant bene booked and TAH will be done on te same day it has an TAT needs to be informed. Tagging Missed."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx is facing issue with the Screw in the product that she has purchased, purchase from the store and the JC informed that the same can been taken in repair ans try to get the issue sorted. An apology needs to be there on call."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx has raised an Return an product from SHAYA # M092A8D0 and the pick up is getting delayed. Cx needs the pick up to be done asap."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx needs to know regarding the Profile Balance and JC checked and informed the details and Cx was looking for the transfered to her Bank account and deductions details informed. Tagging Missed."
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work!"
   },
   {
    "query": "15-Day Exchange",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good call please wait for the customer to say thank you back before pushing for IVR"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good work. Please wait for cx to finish the call before IVR transfer"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    13,
    14,
    15,
    16,
    17,
    19,
    20,
    22,
    24
   ],
   "etq": [
    1,
    2,
    5,
    16
   ],
   "prob": [
    3,
    4,
    8,
    9,
    13,
    15,
    18,
    23
   ],
   "sol": [
    0,
    2,
    3,
    4,
    6,
    7,
    8,
    9,
    10,
    12,
    13,
    15,
    18
   ],
   "fu": [
    7,
    12
   ],
   "tag": [
    14,
    18,
    21,
    23,
    26
   ]
  }
 },
 "karthikn": {
  "name": "Karthik_N",
  "initials": "KN",
  "color": "#1d4ed8",
  "cq": 65,
  "audits": 5,
  "ncf": 1,
  "totalErrors": 7,
  "params": {
   "ss": 5,
   "etq": 0,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "1 NCF this month on Call audit. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 4 of 5 audits, for example on the Call audit case (25 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 2 of 5 audits, for example on the Call audit case (25 Sep). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   }
  ],
  "cases": [
   {
    "query": "Call audit",
    "score": 88,
    "ncf": false,
    "date": "25 Sep",
    "comment": "dead air in between calls, positive affoirmations & ownership statements could have been used. There's a gifted message on the order so should have addressed it accordingly, also if the product is not available in cx city, please apologise and do not justify stating if it was so n so it creates a negative impact. JC needs to use better phrases while speaking on call. Since its a new JC, marking slight markdowns. IVR pitch was very good."
   },
   {
    "query": "Call audit",
    "score": 75,
    "ncf": false,
    "date": "25 Sep",
    "comment": "JC sounds low on call, needs to be more energetic. Do not interrupt the customer, cx was trying to find the right word. Templated apology found \"really sorry for the inconvinience\" Personalise it please for every customer."
   },
   {
    "query": "Call audit",
    "score": 75,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Please empathise with the customer, the customer wanted to cancel the order, had complaints with the store customer service. JC checked with other executives and assisted the customer accordingly, JC did a follow up call as well."
   },
   {
    "query": "Call audit",
    "score": 88,
    "ncf": false,
    "date": "25 Sep",
    "comment": "Please emapthise with the customers. Long dead air, call kept on mute rather than hold. Later when it took longer JC asked the cx and kept the call on hold. JC asked cx time to callback as the info was ready in instant. JC called back as well and notified the customer we shall try our best. Cx had already appriciated no need of asking cx for appriciation again on same call."
   },
   {
    "query": "Call audit",
    "score": 0,
    "ncf": true,
    "date": "25 Sep",
    "comment": "Cx had already notified the reason for cancellation, JC made the cx repeat the same info. Please let the customer vent it out before intterupting, a templated sorry does not sound right for a customer who is irrated with the services. Jc provided wrong information that once the order is invoiced we cant cancel the order. Jc explained a longer route to customer to reject the delivery attempt then we can initiate a refund. The order was just under \"preparing for dispatch\" it could have been raised under RTO and refund."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    4
   ],
   "etq": [],
   "prob": [],
   "sol": [
    4
   ],
   "fu": [],
   "tag": [
    1
   ]
  }
 },
 "chanchals": {
  "name": "Chanchal_S",
  "initials": "CS",
  "color": "#be123c",
  "cq": 60,
  "audits": 10,
  "ncf": 3,
  "totalErrors": 15,
  "params": {
   "ss": 8,
   "etq": 0,
   "prob": 2,
   "sol": 2,
   "fu": 1,
   "tag": 2
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "3 NCFs this month on Digi Gold, Order Tracking / Status, Refund Status / Delay. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 4 of 10 audits, for example on the Digi Gold case (10 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 4 of 10 audits, for example on the Digi Gold case (10 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Shaya Wrong product recieved",
    "score": 85,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had a pick up request raised for a wrong product received and so cobtacted us Jc had a check over the details and as required raised the ticket as well as PD was raised. Sounded Monotonous as well could have used more of positive and ownership phrase. Incorrect Dispostions selected Ensure to follow up on this case by having it resolved."
   },
   {
    "query": "Digi Gold",
    "score": 0,
    "ncf": true,
    "date": "10 Sep",
    "comment": "Cx had a concern in regards with the digi gold selling were the store team didn't help him accurately re-directing to contact the online team due to which cx was irate and contacted us. Jc gave a generic response missed to probe for the accurate concern as well as missed to probe for the store details. Missed to apologise, Avoid overlapping, cust had to seek responseinitially, Sounded upfront and rude hence NCF Failed to use positive & ownership phrases."
   },
   {
    "query": "Shaya Product Quality Issue",
    "score": 88,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx has placed Orders for SHAYA and claims that she has received an incorrect product or damaged produ ct and JC checked for the exchange but Cx os looking for refund. Retention tried but Cx needs refund only. Return raised and JC checked the piccs shared by the Cx. Need to owe more empathy stating that usually there wont be issue like this in SHAYA product we apolozises for the same happened etc."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "11 Sep",
    "comment": "CX has placed an Order in the month of June and still the Order is not yet delivered and its in the stage of Hall marking and Cx was irate and JC informed that she with the concern team and will update the Cx. JC needs to be more empathatic and seek apology on call since the Order is delayed for months."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "11 Sep",
    "comment": "Cx needs the Order delivery status and the same needs to be delivered on the same day itself. Call needs to be placed on hold rather mute. Dear Air. JC informed that she will check with the concern team and will make sue the delivery will be done asap and WA connectivity informed. Ordwe was delivered. Need apoloigy and posiuutive phrases on call."
   },
   {
    "query": "Refund Status / Delay",
    "score": 0,
    "ncf": true,
    "date": "16 Sep",
    "comment": "Cx needs to know the refund update. Cx has purchased the product via DG, TC and Payment done Online but the same was cancelled and Online payment ha sbeen refunded but the DG & TC has not refunded and no update. Rude in call and the Cx was irate on the call and informed the JC to disconnect the call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "16 Sep",
    "comment": "Order has been placed in the Month of July and still now the same is not delivered and no update on the Order. # Y13E6D6A Cx said that she has received an call informing that order needs to be cancelled and proceed with placing an New order with higher price. JC apologized and informed that she will check on teh same but calls not found or not audible. JC informed the Cx that the Order will be disptched by 12th and will be delivered on 13th will be delivered where as the Delay EDD - 20-09-2026 and delivery date will be on 21st early was Revised EDD 17-08-2026 06:00 and delivert date will be on 18th Sep informed by the Cx also. Wrong infor shared and need more apology on call needed and its an High Value Order too."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx contacted us in regards with the delivery of his order. Jc had a check and provided the required infor to the cx. Good that pro-actively shipping details were confirmed"
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Delay in delivery, JC checked and informed the details on the delivery of the Order. Address detals checked. Alternative Phone no checked and over all call was fine but need emoathy on call for the delayed happened. Tagging Missed and Order was delivered on 16th Sep."
   },
   {
    "query": "15-Day Exchange",
    "score": 100,
    "ncf": false,
    "date": "22 Sep",
    "comment": "Good call"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    8
   ],
   "etq": [],
   "prob": [
    1,
    6
   ],
   "sol": [
    1,
    5
   ],
   "fu": [
    1
   ],
   "tag": [
    0,
    8
   ]
  }
 },
 "noorjahanr": {
  "name": "Noorjahan_R",
  "initials": "NR",
  "color": "#15803d",
  "cq": 48,
  "audits": 30,
  "ncf": 7,
  "totalErrors": 66,
  "params": {
   "ss": 26,
   "etq": 4,
   "prob": 14,
   "sol": 15,
   "fu": 4,
   "tag": 3
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "7 NCFs this month on Call audit, General Policy Query, Lifetime Buyback (LTB), Refund Status / Delay, Repair Quality / Process Issue, Return Initiation / Request. Most Inbound NCFs this month were incorrect information on policy (Shaya returns, LTB value, cancellation and refund TATs) or a missed callback after a dropped call. Verify against the SOP, order tracking and any open ticket before committing, and always call back if the call disconnects."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 18 of 30 audits, for example on the Return Initiation / Request case (06 Sep). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 12 of 30 audits, for example on the Return Initiation / Request case (06 Sep). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "27 Aug",
    "comment": "Cx has placed the Order but not received the delivery of the same. JC checked and informed that she will be raising the issue and will make sure the delivery will be doe asap. JC needs to seek apology and empathy for the delay caused."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "31 Aug",
    "comment": "Cx wants fto place the Order for SHAYA and Cx needs to use the Xclusive pointsn the Order and Cx wish to place the order oin 01st Sep since the points will be credited to the Cx. JC informed that the validity for the same cant been confirmed and JC needs to be a little more confirdent and show empathy on call. Finall;y Cx has placed the Order. BOD."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 0,
    "ncf": true,
    "date": "01 Sep",
    "comment": "Cx wish to return the prodyc in LTB and the pick up getting delayed and needs the pick p to be done asap. JC checked and informed the details. Cx checked for the the value of the product and JC informed that Cx will be getting the amount as per the day when she has purchases not as per the currect day Gold rate. Incorrect info and the tone of the JC on the call was not fine."
   },
   {
    "query": "General Policy Query",
    "score": 50,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx needs an call back from Raghu and JC informed that she will arrange the call bck, but JC needs to check the reason for the call and assist the Cx bt missed."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 50,
    "ncf": false,
    "date": "01 Sep",
    "comment": "Cx has raised an KF for the return and asked to cancel the same since she will be visiting the store for the return and store team is not able to raise the same since Online pick up is active. JC was not able to understand what the Cx and Store team is saying and its an LTB not 15 days MB wrong tagging done."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 38,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx was looking to return a product to us under LTB and contacted us to know more about it JC had a check over the details did the necessary probing failed to retain the cx, Missed to apologise need to use better phrase with better tone - Aapko money back hi chahiye naah?, Product aapke pass hi hai naah?, Aaapko raise karu kya pick up ke liye?, Aapne order plce karne ka date check kiya hai While giving the opening on the call need to sound more clear Missed to explain how LTB valuation is calculated as well as missed to inform the complete return procedure,Incorrect Dispostions selected No return request reflecting - BOD due to tech error"
   },
   {
    "query": "Order Cancellation",
    "score": 38,
    "ncf": false,
    "date": "02 Sep",
    "comment": "Cx had a order placed at the store and contacted us to know the status of it. Jc had a check over the details Initially missed to check for accurate details on one view however later informed that as this is a stroe order placed using LTE amount refund isn't possible Incorrect info given need to mention that the amount could be converted to LTB for refund. Missed to apologise, Better phrasing to be done (opening need to be modified in better way)"
   },
   {
    "query": "Order Tracking / Status",
    "score": 50,
    "ncf": false,
    "date": "03 Sep",
    "comment": "Cx contacted us as she was facing a concern inregards with the delivery of her order. JC had a check timely apology missed, avoid dead air, Can u please wait on the call so that I can chekc on the order details, Unhse ek baar check kar lijiye naah - Better phrasing Missed to confirm the order ID, However relevant probing was done were the issue found to be resolved on the Follow up call. Tone while probing need to be better, Avoid direct transferring to IVR, Delayed Follow up observed"
   },
   {
    "query": "Refund Status / Delay",
    "score": 70,
    "ncf": false,
    "date": "05 Sep",
    "comment": "Cx contacted us as she was facing a issue with the refund of a product given under LTB. Jc had a check and provided the required resolution on it. Missed to apologuse, missed to confirm the order ID Avoid giving blunt / straight forward reply always modify"
   },
   {
    "query": "General Policy Query",
    "score": 50,
    "ncf": false,
    "date": "06 Sep",
    "comment": "Cx contacted us to know the general delivery policy of a MTO / customisation product Jc had a check missed to probe accurately as well as irrelevant probing done Missed to apologise and need to work on understanding skill"
   },
   {
    "query": "Return Initiation / Request",
    "score": 0,
    "ncf": true,
    "date": "06 Sep",
    "comment": "Cx had a concern in regards with the return of her shaya order. Jc had a check over the details however incorrect info given that shaya product can be returned at CL store hence NCF Failed to portray Empathy when necessary, Need to use better phrase, Missed to confirm the order I, Also failed to retain, Incorrect Dispostions selected"
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Cx needs the Order delivery update and JC checked and informed the Cx but the Order delivery was delayed and Cx was was upset for the same. Its an Store pick up and Cx needs the same to be delivered to home JC needs to be a little more polite in informi ng no it cant been done. Postive phrases missing."
   },
   {
    "query": "Order Tracking / Status",
    "score": 69,
    "ncf": false,
    "date": "07 Sep",
    "comment": "Order delivery issue and Cx was irate due to the delay in delivery and JC checked and informed that the Order has been marked RTO. Call was on mute and not on hold. Cx seeked response from the JC and hold on call to be worked on. JC called and informed the Cx that the Order ha sbeen losses and informed that she will be placing a New Order and placed #EZCHNHO1DDAE-JM Need positive phrases on call."
   },
   {
    "query": "General Policy Query",
    "score": 0,
    "ncf": true,
    "date": "07 Sep",
    "comment": "Cx said that her daughter has loosed one of the earrings from the product - Rainbow with heart 9KT Gold Stud Earrings for Kids and she needs the same one pair (only 1) wish to purchase but where as the earrings will be in pair and the same SKU has bene discontinued. Cll was transfered to Pre Sale. Incorrect infor shared."
   },
   {
    "query": "Order Tracking / Status",
    "score": 50,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx had a concern in regards with the order which was placed but amount was not received to us. Jc had a check over the details Missed to apologise, Need to use better phrasing, Irrelevant probing done - Did u chekc the transaction As cx wasn't able to hear the JC clearly, Jc informed that she would CB but no records of the CB found - BOD for NCF as informed by the team earlier"
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 0,
    "ncf": true,
    "date": "09 Sep",
    "comment": "Order # K6B48B11 has been delivered and Cx is facing issue with the product and JC seeked the images for the same over WA and Cx shared. Cx said that he is facing some issue with the product and JC informed that she will check and get back over the WA and Cx called us from INTL NO. No apology and emoathy on call and no follow up found."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "09 Sep",
    "comment": "Cx wants the Order delivery status # EZCHNHO73A5H-JM and JC checked and informed the details. Over all the Order has been delayed and Cx is irate. Email going on for the same and Order is yet to be dispatched. We ra facing issue in price and there is sone price difference in the Order, email triggered on 08th Sep, BOD."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "10 Sep",
    "comment": "cx wanted to know through which delivery partner the product is getting delivered."
   },
   {
    "query": "Return Initiation / Request",
    "score": 38,
    "ncf": false,
    "date": "10 Sep",
    "comment": "Cx had a concern raised in regards with pick up to be arranged at the earliest Jc had a check missed to retain as well as probe for the image were cx mentioned that the product looks oxidised Missed to apologise need to avoid averlapping sound gentle, Work on understanding skill Also need to work on better phrasing"
   },
   {
    "query": "Refund Status / Delay",
    "score": 0,
    "ncf": true,
    "date": "16 Sep",
    "comment": "Product has been dropped in the store for the LTB and New Bank Account details has been updated by the Cx and Cx needs the refund asap. JC checked and informed that refund will be initied with in 24hrs and the next day was 14th Sep Publi Holiday and Cx checked on the same and JC informed that the refund will be done and Cx was asking for the feedback where JC missed. Till date the refund is not initiated."
   },
   {
    "query": "Order Tracking / Status",
    "score": 38,
    "ncf": false,
    "date": "16 Sep",
    "comment": "Delayed delivery and Cx needs the update on the Order delivery. TAT informed by the JC but the CX needs the delivery on the same day. PIN CODE details checked, Product availability informed in the store by the JC. Size issue and JC needs to probe according. TAT was informed wrong since RTO needs to be marked and TAT for the profile balance will be 7-10 working days. No empathy and apology on call."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 50,
    "ncf": false,
    "date": "17 Sep",
    "comment": "Cx needs to know the the repair update and JC checked and informed the details but the product EDD was on 14th Sep and Order has not dispacthed yet JC was suppose to check that but JC informed the TAT of 10-15 days and no apology and empathy on call and JC informed that the product was received late from the store where as the Cx has agreed for the repair charges on 06th Sep and from that the TAT will be 10-12 working days."
   },
   {
    "query": "GWD (Gold Weight Difference) Refund",
    "score": 62,
    "ncf": false,
    "date": "18 Sep",
    "comment": "Inattentiveness to customer details noted. The customer mentioned GWD initially, yet the JC inquired about silver jewelry. The JC must actively listen to avoid asking redundant questions and communicate GWD details with greater clarity of exclusive points & all refund was missing"
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Cx needs the update on the Refund update, JC checked the details and informed the Cx to update the Bank details again so the refund will be done. JC needs to owe apology and show empathy since the same is getting delayed and Cx is irate too for the delay in refund."
   },
   {
    "query": "Points / Loyalty Redemption (Xclusive / Encircle)",
    "score": 44,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Good work on trying to educate the customer but when we see a crown customer requesting an email or whatsapp, make sure we adhere to this. Do not interrupt the customer (found on several occasion), since there was multiple amounts and points involved it would have been better if JC could actually drop an email or whatsapp as per customer request and then made an outbound call to ask if the customer understood or needs any further understanding. During the end of the call JC used \"aapko abhi samjh mai aaya hai?\" this sounds sarcastic, try framing this better. Will dicuss during feedback."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "23 Sep",
    "comment": "Customer received the wrong high-value MTO product after waiting two months, leading to extreme disappointment. Given the sensitivity of the case, the JC sounded monotonous and robotic on the call instead of showing appropriate empathy and care"
   },
   {
    "query": "Call audit",
    "score": 0,
    "ncf": true,
    "date": "24 Sep",
    "comment": "Customer reached out regarding buyback of her recent purchase, JC did not sound friendly over the call. Made the customer repeat the same info, JC could not clearify the details with the customer on same call, failed to use positive phrases. Follow up call found, GWD query addressed but the initial query of Buyback was missed on the follow up call as well. Will discuss this during feedback"
   },
   {
    "query": "Return Initiation / Request",
    "score": 0,
    "ncf": true,
    "date": "24 Sep",
    "comment": "The customer called regarding a return issue for a BOGO offer where she could only initiate a return for one item online. Area for Improvement: Customer Friction: The customer had to repeat her information multiple times. Please ensure you actively listen and capture the details early in the call to avoid making the customer repeat themselves. Tone & Phrasing: The tone came across as slightly blunt during the conversation. Phrases like \"That's what, ma'am\" or \"Ma'am, first I want to confirm this thing\" can feel pushy or dismissive to a customer. Recommended Phrasing: Instead of \"That's what, ma'am,\" try: \"I completely understand your point, ma'am, let me help clear that up for you.\" Instead of \"First I want to confirm this thing,\" try: \"Just to make sure I have the right details to help you, may I confirm...\""
   },
   {
    "query": "Call audit",
    "score": 100,
    "ncf": false,
    "date": "24 Sep",
    "comment": "Good call"
   },
   {
    "query": "Call audit",
    "score": 62,
    "ncf": false,
    "date": "24 Sep",
    "comment": "CX has placed an SHAYA product # Y045785F ad Cx said that one of the product has been Broken and wish to have the same exchanged. JC informed that she can vist the store and make the exchange sone where as its an SHAYA Product broken. No pics of the same checked with the Cx and infformed that the exchange can been done. WRONG INFO. BOD since Styore has raised for exchange. \" RTNCRBBRKDG230926259586 \"."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    18,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    29
   ],
   "etq": [
    5,
    7,
    12,
    24
   ],
   "prob": [
    4,
    6,
    7,
    8,
    9,
    10,
    14,
    15,
    18,
    19,
    20,
    21,
    26,
    29
   ],
   "sol": [
    2,
    3,
    5,
    6,
    10,
    13,
    15,
    18,
    19,
    20,
    21,
    22,
    24,
    26,
    29
   ],
   "fu": [
    7,
    14,
    15,
    24
   ],
   "tag": [
    4,
    5,
    10
   ]
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "etq": "#db2777", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
