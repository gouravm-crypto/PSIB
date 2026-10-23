const TEAM_META = {"team": "Post Sale - Inbound", "month": "October 2026", "params": ["ss", "etq", "prob", "sol", "fu", "tag"]};
const AGENTS = {
 "thejab": {
  "name": "Theja_B",
  "initials": "TB",
  "color": "#0d9488",
  "cq": 92,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 7,
  "params": {
   "ss": 3,
   "etq": 1,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 2
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 2 of 12 audits, for example on the Return Initiation / Request case (Call). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 12 audits, for example on the Order Tracking / Status case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Long hold / delayed chat response flagged in 1 of 12 audits, for example on the Delivery related case (Call). Keep holds under 45 seconds and chat responses prompt. If you need longer, come back and update the customer."
   }
  ],
  "cases": [
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the Order cancelled and JC checked and cancellation done and amount will be kept in Profile . Cx agreed . TAT informed by JC ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx said that his TP has not delivered and the pick up is pending . JC informed that the same will be delivered asap and CX confirm the address is correct and needs the to to be delivered asap and pick up needs to be done asap . JC needs more listening skills since Cx was asking the process of the Product drop in the store and JC needs to owe more empathy since the pick up has been delayed from our end ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the SHAYA Product exchanged , JC checked the reason for the same . Cx feels liek the product is not worth of the amount placed and wish to hav ethe same returned . JC informed that since Cx wish to have te return done in store no KF needs to be raused Online and Store will assit the Cx for teh same . No Retention on call found ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Order delivery was delayed and Cx is irate and needs to know the delivery status . Address checked nd confirmation received that the address is corrctly by the Cx . TAT of 24-48 hrs given for the delivery . A little more apoliogy on cal needed ."
   },
   {
    "query": "Delivery related",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on her soli ring order, cx was made to repet JC was distracted on the call long hold the call was disconnected & failed to tag the call."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx got multiple update for the delivery of his order. JC assured the delivery will be very next day, asuured the cx to not to worry on the same"
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx payment was sucessfull however not shoing the app JC assisted the cx confirming the payment. & the order was processed"
   },
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "customer requested to cancel their Shaya order due to a significant dispatch delay on our end. Although the agent pitched an exchange, the irate customer insisted on a money-back refund and declined to wait any longer. need to work on the tone while the cx was irate JC tone sounded heavy"
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx wanted MB did not want to take any design. JC pitched for exchange as it was not possible refund was requested for the same."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "this order was a gift for some one who is alergic to 9kt product so cx wanted to return the same & requested for refund."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx had given store pick up for shaya order by mistake, jc informed to check & get back to the cx. WA Fu is done."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted money back for the silver necklace, timeline was shared with the cx. pitched for retain but the cx denied."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3,
    4
   ],
   "etq": [
    4
   ],
   "prob": [],
   "sol": [
    2
   ],
   "fu": [],
   "tag": [
    4,
    7
   ]
  }
 },
 "ayeshat": {
  "name": "Ayesha_T",
  "initials": "AT",
  "color": "#db2777",
  "cq": 91,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 7,
  "params": {
   "ss": 4,
   "etq": 0,
   "prob": 1,
   "sol": 0,
   "fu": 0,
   "tag": 2
  },
  "aois": [
   {
    "cat": "tag",
    "label": "Tagging",
    "text": "Tagging missed / wrap timeout flagged in 2 of 12 audits, for example on the General Policy Query case (Call). Complete tagging and wrap-up within the wrap time."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 12 audits, for example on the Order Cancellation case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 1 of 12 audits, for example on the Return Initiation / Request case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order and due tpo Family health issue Cx wants the same to be cancelled and proceed with the refund. No Retemtion effort needed since Cx said that its an Family Emerrgency . Refund raised and TAT informed ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised the return and needs to know the status of the same and JC checked and approved the same and pick up done and refund initiated . JC checked for Retention but Cx needs MB only . Dead air on call needs to be avoided and JC needs to work on the same ."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has dropped an Product in the store for repair and the same KF was raised by the Store team after some days and the store team and Manager is not behaving properly with the Cx claims that that repair is due to Quality issue and nit satisfied withthe Store handled the case . JC apologized and informed the process of repair . TAT needs to informed a more clear and words like on behalf of store team am seeking paology with you workd more , BOD. Repair process and TAT needs to be a litle more llear on call ."
   },
   {
    "query": "General Policy Query",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wants to know regarding the Gift card details and Cx wish to talk with Theja or Nitheesh but since both the JCs was nit available JC checked but not able to find the details and informed that she will be arraning an call back from the Theja and JC called the CX. Tagging missed and need apology and empathy on call ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "EDD revised cx wanted it urgently as she was travelling to other city. JC informed that she will raise a ticket to have the sme by 21st"
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on the refund status of the mangalsutra as the same was processed from our end JC informed the TAT time for credit card &"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on her refund, jc said the same is ni her a/c due to CTC amt JC needs to convert it from MB to exchange. JC raised the ticket for exchage"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on the 15 day exchage credit balance as cx was not able to see the same JC assited the cx witht the profile balance."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx bought the earring from store & the earring was not suting her so she wanted to have the same returned , JC infomed the same can be exchaged as 15 day full value exchange"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\nCx wanted to exchage & buy something else as the received product was very small. JC pitched for exchage & requested for exchange."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncx requested for moneyback as she felt the product was verythin, wanted moneyback for now& the same was refunded."
   },
   {
    "query": "Tresure chest / POP",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "customer raised a concern regarding price appreciation on their CTC account following a price increase, noting that their invested amount was not appreciating. The JC is investigating the issue with the team and informed the customer that an update will be provided"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    3,
    11
   ],
   "etq": [],
   "prob": [
    2
   ],
   "sol": [],
   "fu": [],
   "tag": [
    3,
    4
   ]
  }
 },
 "mazian": {
  "name": "Mazia_N",
  "initials": "MN",
  "color": "#0891b2",
  "cq": 88,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 11,
  "params": {
   "ss": 8,
   "etq": 1,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 2 of 12 audits, for example on the Return Initiation / Request case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 12 audits, for example on the General Policy Query case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 12 audits, for example on the Return Initiation / Request case (Call). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has given an extra product while the pick up was done and Cx needs the same to be returned back and its already delayed . JC checked and informed that the product has been redispatched and will have the Order delivered to the Cx address asap . Cx agreed . Apology on delayed happened needs to be there ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised for return # X-E9BC9472 and pick up is not done . Cx has used LTE amount in the Order and Cx was looking for refund for the Order and JC checked and informed as an exception 15 days exchange has been approved and Cx was fine with teh same and pick up ha sbene raised and TP will be delivered and needs to infor the TAT for the pick up missed . Cx asked regarding the store drop and JC suggested for Online pick up where as the JC needs to inform the Cx that she can visit the store and if she is facing any issues she can let us knaow we can speak with the store team . Dead air needs to be worked on and need empathy on call . BOD ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs to the pick up to be done for the SHAYA Product which is placing the QC issue and the coating has been pealed off . Pikc up needs to be done on or before 4 Pm as per the Cx request and call was disconnected ad JC called the Cx again and cX said that he has received the call from Courier perfor for the pick up . Since the pick up has been initiated no need to check the product details likes pic etc. BOD . Need apology and empathy on the call for the Issue happened with the product with in 2 days ."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed the Order but the same ha sbeen cancelled and CX needs to know the reason for the same . # K677F82C SHAYA product , No apology and emoathy on call . Due to product quality ossue the product ha sbeen cancelled and New order haa to be placed and RTO raised . Hold needs to be worked on ."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted clarifications witht he order LTE value. JC was muffaled while communicating the details. Need to be more confident & polished while communication"
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know what is the exchage & buyback policy, JC did not know the exchage & buyback policy informed to check &let the cx know. need to improve listerning skills."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx got fake text from CL regarding the delivery, however JC informed this is a tech error the same will be rectified."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx got the cancelled order refund twice of 60000k, So cx reched out for assistance."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx got wrong order delivered so wanted to have the same returned, JC requested for image to have the issue rectified. ticket raised for this issue to adress the cx concern"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to return the barcelet as she did not like the order, JC pitched for profile bal cx denied & requested for MB. JC needs to improve the probing to understand the actual reason for return & pitch Retention accordingly."
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "customer ordered two Nazaria items; one was scheduled for delivery on October 4th and the other on October 6th. Due to the delivery delay on the first item, the customer reached out to inbound support (IB). Both orders were delivered on the evening of October 6th. During the call, the JC muted the line instead of placing the customer on hold, leaving the customer feeling unattended while seeking updates."
   },
   {
    "query": "Tresure chest / POP",
    "score": 88,
    "ncf": false,
    "date": "Whatsapp",
    "comment": "customer inquired about the CTC payment and refund policy. The JC sounded monotonous during the interaction and unnecessarily apologized multiple times.\""
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
    10,
    11
   ],
   "etq": [
    3
   ],
   "prob": [
    1
   ],
   "sol": [
    9
   ],
   "fu": [],
   "tag": []
  }
 },
 "mohammadsalmans": {
  "name": "Mohammadsalman_S",
  "initials": "MS",
  "color": "#b8860b",
  "cq": 87,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 9,
  "params": {
   "ss": 4,
   "etq": 2,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 1 of 12 audits, for example on the Order Cancellation case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "CSAT not pitched flagged in 1 of 12 audits, for example on the Order Cancellation case (Call). Once the query is resolved, pitch for CSAT feedback before closing."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 1 of 12 audits, for example on the Return Initiation / Request case (Call). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the Order cancelled due to delay in delivery of the Order # X-ND4271EE , Dead Air on call . Cx said that she will visit the store and placed the New Order using profile balance . New Order placed from Online C SAT Missed ., BOD. No apology on call ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the product returned since the same is not suiting her . Store team is dening the same it seems . SHAYA Product . Retehtion tried but Cx needs MB only and JC needs to avoide repeated statement with the Cx . BOD ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised an 15 days MB and JC tried for Retention but Cx needs MB only and JC informed the process and TAT for refund . Interption on call needs to be avoided . Cx said that product is not getting suited for the Cx ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "15 days MB call ad JC tried for Retention but Cx needs MB only and KF approved and TAT for refund informed . Need to use more positive phrases on call."
   },
   {
    "query": "Negative Sentiment",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order edd was missed cx wanted an update JC assited the cx witht he same."
   },
   {
    "query": "Negative Sentiment",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Do not forget to dispose the calls"
   },
   {
    "query": "Return Initiation / Request",
    "score": 94,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx wanted to return the earring as she was not satisfied with the product JC assisted the cx with the ne return request . JC pitched for exchage cx denied the same."
   },
   {
    "query": "Order Cancellation",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to cancel MTO order JC informed the same will not be possible as its MTO order, hence suggested to take delivery &cx asked if she can return the order JC confirmed the same."
   },
   {
    "query": "Return Initiation / Request",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "customer had to travel 150 km to collect the order from the logistics hub. Since the intended purpose for the item had passed, he requested a return. The JC improperly probed by asking the customer to visit a store instead of addressing the return. Additionally, the JC unnecessarily asked him to call back, despite asking the cx to send photos for follow up via WhatsApp.\""
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "customer was dissatisfied due to a lack of advance delivery notification, as she was unavailable to receive the package. The delivery executive offered to leave the order with security, which the customer declined. The JC resolved the concern by scheduling a redelivery for the following day."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx tamper proof was tampered So cx was worried, New request was raised & Solution as provided to cx"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncustomer requested to return a Shaya jewellery item due to a sizing issue, noting that it was too small. The JC should have delivered a tailored exchange pitch offering a larger size to retain the customer. A generic exchange pitch is ineffective; communication needs to be more clear, crisp, and persuasive"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    3,
    11
   ],
   "etq": [
    0,
    6
   ],
   "prob": [
    8
   ],
   "sol": [
    8
   ],
   "fu": [],
   "tag": [
    5
   ]
  }
 },
 "sadiqbashai": {
  "name": "Sadiqbasha_I",
  "initials": "SI",
  "color": "#7c3aed",
  "cq": 87,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 9,
  "params": {
   "ss": 6,
   "etq": 2,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Grammar / addressing errors flagged in 2 of 12 audits, for example on the General Policy Query case (Call). Re-read before you send. Check the customer's name, spelling and sentence structure, because one small slip makes the whole reply look careless."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 1 of 12 audits, for example on the Refund Status / Delay case (Call). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 1 of 12 audits, for example on the Order Cancellation case (Call). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Refund Status / Delay",
    "score": 67,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wants to know the return status , # TF797455 , QC was pending and later on the same was done . Cx was irate on the delay in refund . Intereption neecs to be avoided . TAT informed ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs to know the refund of the Order . QC is pending and JC informed the detaila and TAT for the refund has been informed . SR has been raied for the QC check ."
   },
   {
    "query": "Order Cancellation",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "Due to delay in delivery Cx wants to have the product to be cancelled . Cx wants to cancel the Order and add the amount to be added to his profle since its an Anniversary gift . Order was cancelled and New order was placed from the profile balance from Store . Need to owe apology and empathy on call and misse dto wish the Cx on his Anniversary."
   },
   {
    "query": "Return Initiation / Request",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised 15 days MB for the products , JC tried for Retention and Cx was looking for SHAYA Styore for dropping the store . Cx needs refund only pick up raised and TAT informed . Retention needs to be done more better . Hold time needs to be worked on . For SHAYA product there wont be any TP delivered . BOD ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "MB delay from cx, pick up confirmation was not given so that the mb could be processed."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to exchage the purchase done from ctc plan as there r better offer excenging the same wanted to buy something with higher value. do not keep the cx on the same line for any exceptional discussion."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was not delivered by logestic false update was shared so cx reched out for delivery."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx wanted to return the diamond ring as the product had size issue & cx did not like the look in the finger, JC pithed for exchage however cx denied"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "(EDD) for the customer's Shaya order was missed, causing significant frustration. Since delivery was no longer viable, the JC processed a refund. However, the JC inappropriately asked the customer why the delivery failed. Agents must focus on providing solutions rather than asking customers to explain delivery failures, as customers call us to resolve these issues."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx shaya order was delayed & the logestic have given false update cx was waiting for the product as this was birthday gift, cx wanted refund as she did not want to wait any further."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "customer was agitated due to a severe delivery delay. The JC needs to improve their active listening skills, as they repeatedly asked the customer for her registered mobile number. Although the JC informed the customer that a redispatch had been initiated, the customer remained dissatisfied because logistics claimed they could not locate the address. however was satisfied witht he JC assistance."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "customer wanted to return a Shaya jewellery item because the return option was not visible on the portal/app. The JC assisted with the request; however, they need to slow down their speaking pace and demonstrate better active listening skills during customer interactions check well before commeting anything."
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    5,
    8,
    10,
    11
   ],
   "etq": [
    2,
    3
   ],
   "prob": [],
   "sol": [
    3
   ],
   "fu": [],
   "tag": []
  }
 },
 "adeebh": {
  "name": "Adeeb_H",
  "initials": "AH",
  "color": "#9333ea",
  "cq": 87,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 10,
  "params": {
   "ss": 3,
   "etq": 2,
   "prob": 2,
   "sol": 2,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 2 of 12 audits, for example on the Return Initiation / Request case (Call). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 1 of 12 audits, for example on the Order Tracking / Status case (Call). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Preferred language not used flagged in 1 of 12 audits, for example on the Delivery related case (Call). Switch to the customer's preferred language as soon as they indicate it."
   }
  ],
  "cases": [
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to return the SHAYA Products but the same is not getting update from the App . Reason checked for the return by JC , JC checked for Retention but Cx needs MB and pick up raised and refund processed . Cx said that he will plan purchase for Diwali PB needs to be suggested , BOD ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Return for the Order # VCD3F955 and TO has been dispatched but the same is not delivered due Incomplete address and CX needs the Order to be picked up asap . JC informed that he will make sure the TO delivery asap and will have the pick up done . Need positive phrases on call and need to check for Retention .BOD ."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the product returned , JC checked for the reason and Cx wish to have the product returned and wsh to purchase from Other Brand . Store Order since Exchange only can been done JC informed the details . Cx said that she will be visiting the store . JC was suppose to check with teh Cx that what went wrong with the product since Cx wants to go with another Brand."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx said that she has already done with the repair of the product and again the Diamond of the product is getting fallen . No apology and empathy on call . JC Informed the Cx to have the product dropped in to the store so that the product can been checked and Cx was not fine with paying the charges. JC informed thar the team will call the Cx on the repair charges update . Instead JCneeds toi inform the Cx that pos dropping the product in the store the repair team orOB team will be calling the Cx for confirmaing the charges if any and out team will check and inform you accordingly . C SAT BOD."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx wanted to return & buy the same product under 15 day exchage due to offer update. As per the new update cx cannot buy same product or do offer match. JC was not aware of the same. incorrect info shared for store call back."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know order update for the payment, JC was overlaping & over powering the cx allow the cx to finish the convo"
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was delayed by logestic as she was not abailable to take calls on 10th later till 13th the delivery was not attempted. JC informed cx the order will be delivered by 14 to cx."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "customer was unavailable for the return pickup and requested a pickup in a different city. The JC assisted by advising that the item could be dropped at any nearby store in any city. However, there was miscommunication at the beginning of the call due to poor listening skills. The JC needs to stay attentive on calls to avoid distracting or frustrating the customer."
   },
   {
    "query": "Reverse pick up / delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "customer expressed dissatisfaction witht he delivery of her product she felt the product was used, As she had meeting she wanted the pick up to happen between 12-2 pm.The same was requested by the agent as per the cx request."
   },
   {
    "query": "Delivery related",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "customer called seeking an update on a severely delayed order. Although the JC provided the update, they continued speaking in Hindi despite the customer communicating in English. This caused offense, leading the customer to disconnect the call prematurely. should have taged as delay complaint."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncx requested for moneyback. could improve thr retention pitch. did not check for reason for refund."
   },
   {
    "query": "Refund Status / Delay",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncx requested for moneyback as her adress did not have return pick up services, she said that she was assured that the pick up will be done for her adress incase of return."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3,
    5
   ],
   "etq": [
    9,
    11
   ],
   "prob": [
    1,
    2
   ],
   "sol": [
    4,
    10
   ],
   "fu": [],
   "tag": [
    9
   ]
  }
 },
 "asrarahmedp": {
  "name": "Asrarahmed_P",
  "initials": "AP",
  "color": "#ea580c",
  "cq": 86,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 9,
  "params": {
   "ss": 6,
   "etq": 0,
   "prob": 0,
   "sol": 2,
   "fu": 1,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 2 of 12 audits, for example on the Digi Gold Sell-back (Withdrawal) case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 2 of 12 audits, for example on the Delivery related case (Call). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 1 of 12 audits, for example on the Shaya Order Status / Tracking case (Call). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   }
  ],
  "cases": [
   {
    "query": "Digi Gold Sell-back (Withdrawal)",
    "score": 70,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to resell the Digi Gold purchased , It seems that Cx has purchased from Phone Pe and JC informed to check the details with PP CC so that they can asssit the Cx . JC informed that he will be sharing the no of the Phone Pe Cx service with the Cx but missed to share SMS . Need apology on call ."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "SHAYA Order delivery issue , # JDCB0369 , OFD . JC raised the SR ofr the faster delivery . JC needs to be a littke more ative on call , BOD."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Due to delay in delivery in Order delivery Cx wants the same to be cancelled and JC raised for the RTO . Tone needs to be a little more louder and active ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "#C993C786 Cx has raised for 15 days MB for the Order. JC informed that the pick up has been failed since the PINCODE is not servicable and Cx needs to sent the Parcel to the MUMBAI address and JC informed that he will be sharing the details in the WA . No empathy and apology on call .No Retention effort on call ."
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to return the cain as it was very tight on her neck JC assited the cx witht he details & suggested visiting the store."
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx had query related to repair charges,as she was informed of some mg of gold getting added & however upon delivery cx found there was less weight."
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx payment did not go through so cx wanted to know an update. Jc infomed the cx to reorder the same."
   },
   {
    "query": "15-Day Exchange",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx wanted to exchange due to size issue, Jc assisted the cx with the exchage request."
   },
   {
    "query": "Delivery related",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know the order status & JC was very monotonus, . Need to be more polished"
   },
   {
    "query": "Delivery related",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know the order status & JC was very monotonus, also please do not repet same info wht cx can see in the website. Need to be more polished"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know if he can get the price match done due to the offer, JC explined the process promptly and cx was ok with the same."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncx wanted moneyback for store purchase, cx informed that she was miss guided JC informed promptly that we do not have this policy. However JC should also hearout cx"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    2,
    3,
    8,
    9,
    11
   ],
   "etq": [],
   "prob": [],
   "sol": [
    0,
    3
   ],
   "fu": [
    0
   ],
   "tag": []
  }
 },
 "nitheeshr": {
  "name": "Nitheesh_R",
  "initials": "NR",
  "color": "#2563eb",
  "cq": 86,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 9,
  "params": {
   "ss": 6,
   "etq": 1,
   "prob": 1,
   "sol": 0,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 2 of 12 audits, for example on the 15-Day Exchange case (Call). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "CSAT not pitched flagged in 1 of 12 audits, for example on the 15-Day Exchange case (Call). Once the query is resolved, pitch for CSAT feedback before closing."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 1 of 12 audits, for example on the General Policy Query case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order and needs to know the delivery status of the Order and JC checked the details with the registred ph no and order was visible but JC could not find the details and later share the update on the refund dince RTO was raised in the Order . Need to check the One Voew details correctly ."
   },
   {
    "query": "15-Day Exchange",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Repair update # EZNGPDHP8A1AB-JR , Cx needs to know the repair update and later Cx said that she wish to have the product to be exchanged . Any ways the product is sent back to the store as it is without repair . CSAT Missed , BOD and intereption needs to be avoided on call ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised an MB for the Order # EZBLRMMRE50DI-JR and its an Store Order too . JC informed on the policies and informed thar the product is on elibible fpr 15 days exchange MB is not possible . CX agreed .JC was suppose to inform the Cx also that STORE Orders are not eligible for MB too . Need to check One View and probe accordingly."
   },
   {
    "query": "General Policy Query",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has enrolled for POP and wish to buy GC and Call was transfered to Pre sale and again the call was transfered to Post sale and JC informed thathe POP can been used for Jewel purchase only and MB cant been done and for GC purchase the additional befinit wont be given polocies explianed but the Tone needs to be a littke more better . BOD. Apology missed since MB is not possibe ."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ndue to severe delay cx requested for MB for the shaya order. Cx reched out for refund not exchange."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncx return was not getting picked up for MB, he was upset for the delay.Jc raised new pick for the mb, jc tried to retain cx denied"
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx was not able to view his profile balance wanted assistance with the using of the money JC assisted the cx with the same"
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was cancelled & she did not have any update on the refund, cx order was not getting picked up Cx was Irate. JC promised to get the order picked up"
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "There was a delay in dispatching the product, and the customer requested a delivery update as she was leaving the city in two days. The JC informed her that the package had reached Delhi and assured her it would be delivered either later the same day or the following day."
   },
   {
    "query": "Delivery related",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "logistics team failed to deliver the customer's order, resulting in a two-day delay. While addressing the concern, the JC jumped straight to a solution without letting the customer finish speaking. The JC must practice active listening and allow the customer to fully explain their issue before offering resolution steps. listern to cx towards the end cx asked if she can disconnect JC said no need do not be deviated while attending calls."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "customer reached out after being denied Money Back (MB) at the store. The cx was unable to patch a call to the a friend visited store so the JC informed the customer that the store had been notified via chat, promising an update the following day due to store closing hours. However, the JC needs to improve active listening by allowing the customer to finish speaking before offering solutions, rather than interrupting or talking over them"
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "customer called for an update regarding a product return submitted at a physical store. The JC was unable to locate the order details, causing the customer to become agitated during the conversation. The JC needs to communicate with greater clarity and precision to ensure the customer understands the status and next steps. cx was a crown member should have handeled better."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    3,
    4,
    9,
    10,
    11
   ],
   "etq": [
    1
   ],
   "prob": [
    2
   ],
   "sol": [],
   "fu": [],
   "tag": [
    11
   ]
  }
 },
 "shoaibs": {
  "name": "Shoaib_S",
  "initials": "SS",
  "color": "#4f46e5",
  "cq": 86,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 14,
  "params": {
   "ss": 4,
   "etq": 5,
   "prob": 2,
   "sol": 2,
   "fu": 0,
   "tag": 1
  },
  "aois": [
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Long hold / delayed chat response flagged in 4 of 12 audits, for example on the Order Tracking / Status case (Call). Keep holds under 45 seconds and chat responses prompt. If you need longer, come back and update the customer."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 2 of 12 audits, for example on the Points / Loyalty Redemption (Xclusive / Encircle) case (Call). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Interrupting the customer flagged in 1 of 12 audits, for example on the Delivery related case (Call). Let the customer finish, and let an irate customer vent, before responding. Interrupting makes them repeat themselves and escalates frustration."
   }
  ],
  "cases": [
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx was looking for the Purchase of the product by using Profile Balance and JC informed the details and Over all assisted the Cx for placing the Order and call was transfered to Pre sale team ."
   },
   {
    "query": "Repair Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx is having the ossue with the product # R51B8E8A - SHAYA need repooshng to be done free of cost . JC informed the Cx that SHAYA polishing and epair is not in process now and once the same has been started will inform the Cx and needs to check like whether the product is exposed to chemicals or acdis ect . Need valid probing on call . Need apology for the same happened ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Due to delay in delivery in Order delivery Cx wants the same to be cancelled and JC raised for the RTO . JC informed the Cx that the Ordrr has been marked RTO and teh same will be delivered back to CL and post QC the refund will be initiated . Cx asked that she can place the Order Online and pick up from store JC was to check the availability of teh product n store or infor the SHAYA Store details since all the SHAYA PRODUCTS wont be available in stores . Need valid n probing on call ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs the delivery staus of the Order and its an Bday Gift since Cx needs the delivery of the Order asap . # EZCHNHO648BV-JM , JC checked the Order delivery status call was placed on hold and the same needs to be worked on , Call was disconnected by the Cx and jC called the twice but no response ."
   },
   {
    "query": "Delivery related",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "cx got false update from logestic & the order was not deliverd from july. So cx reched out for delivery. vaoid multiple & long hold. also do not forget to dispose the call."
   },
   {
    "query": "Points / Loyalty Redemption (Xclusive / Encircle)",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "customer requested assistance regarding 200 review points, but the agent failed to comprehend the issue promptly. As a result, the customer had to repeat themselves multiple times. The agent needs to improve active listening and maintain clear, crisp communication on the call."
   },
   {
    "query": "Delivery related",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "cx informed the name of the pendent which was marked as delivered however cx did not receive the same.avoid long hold. allow the cx to finish her fustraion . hearout the cx."
   },
   {
    "query": "Repair Request",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "cx rejected repair req amt wanted the product to be sent back to source, as cx want not getting update call for the response. avoid long hold."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was delayed cx wanted update, JC assured to have the concerned raised. will have the delivery attempted soon"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx called regarding the repair status, JC informed the same will get delivered in 24 hrs, However need to be more focused while seeing the cx details as minor things can irate a cx"
   },
   {
    "query": "Repair Quality / Process Issue",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx had issue with the product she had given it for repair however the product had the same issue cx was irate she felt the product had quality issue. also some MG of gold was also reduced in the repair process as per the cx, & was not happy with the purchase.Jc assited the cx with all possible way, later arranged a call from store for replacement."
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncustomer requested a return because the recipient did not like the product. The JC processed the return request; however, they should have probed further to uncover the underlying reason and pitched an exchange or alternative product to retain the cx."
   }
  ],
  "paramCaseMap": {
   "ss": [
    1,
    5,
    6,
    9
   ],
   "etq": [
    3,
    4,
    6,
    7,
    11
   ],
   "prob": [
    1,
    2
   ],
   "sol": [
    7,
    11
   ],
   "fu": [],
   "tag": [
    4
   ]
  }
 },
 "raghuvanshr": {
  "name": "Raghuvansh_R",
  "initials": "RR",
  "color": "#c2410c",
  "cq": 85,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 10,
  "params": {
   "ss": 6,
   "etq": 0,
   "prob": 0,
   "sol": 4,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Missed retention flagged in 3 of 12 audits, for example on the Return Initiation / Request case (Call). Make a genuine retention attempt before processing cancellations or returns: pitch alternatives, exchanges or offers first."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 2 of 12 audits, for example on the Order Tracking / Status case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 1 of 12 audits, for example on the Order Cancellation case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   }
  ],
  "cases": [
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "SHAYA Order Cx wish to return the product , CX asked to have the Order returned in 15 days MB and JC tried for Retention but Cx needs MB only and refund TAT informed and KF raised . Cx was having an issue with the Order cancelled and refund not done . JC checked and informed the details and over the call was handeled fine . Cx approciated the JC . Hold on call needs to be worked on ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs the delivery update of the Order and its an Store PICK UP . Store has informed the Cx that due to inward issue the delivery will be delayed and JC informed that he will inform the store team to call the Cx . Cx called us and JC again informed the Cx that he has informed the Store team and they has confirmed that Order has been delivered to store and Order was delivered on 01st OCT , BOD. Need apology and empathy for the delay caused ."
   },
   {
    "query": "Store Complaint",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the product returned , JC checked for the reason and Cx wish to have the product returned and wsh to purchase from Other Brand . Store Order since Exchange only can been done JC informed the details . Cx said that she will be visiting the store . JC informed the Cx regading the 15 days exchange polcy and seems that Cx understood that MB is possible and called to IB again informing the details . JC was suppose to inform clearly that 15 MB is only applicable for Online Orders abd for Stre Orders only 15 days exchange polocy will be applicable ."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs to know regardig the Repair Charges update , Product has been delivered to store and JC has arranged an call back from the store . Apology for the delay caused needs to be seeked."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "reversr pick up was not done for PEE59096, cx informed the req was raised & the product pick up was not done , JC informed the same will be done in 3-4 days"
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx one order was cancelled & One order ID was confirmed However cx was confused. so she reched out for confirmation. JC missed pronunced the product names wrong."
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was not getting delivered JC Added in the ticket to have the same delivered ASAP."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx felt the product weight was less and felt the bangle will change its shape if requrly used also the offer has been changed hence wanted return only"
   },
   {
    "query": "Delivery related",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know the status of the delivery, JC raised ticket nd the update was to get it delivered next day"
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \ncx wanted to return the Shaya jewellery as she did not like the product. Should have pitched well to retain the cx,"
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\nCustomer requested a return as the mangalsutra did not suit her, noting a discrepancy in karatage (believed it was 9kt, but it was 14kt). The JC failed to pay attention to the customer's query and missed deliver the right retention pitch, resulting in missed retention opportunity for the product.\n\nAreas for Improvement: Active listening/query comprehension, product knowledge clarity, and effective retention pitching."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Whatsapp",
    "comment": "Retention\n\ncustomer requested a refund after receiving no prior updates. The JC explained the refund process and successfully initiated it; however, the retention pitch could be improved to help prevent order MB"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    3,
    5,
    7,
    10
   ],
   "etq": [],
   "prob": [],
   "sol": [
    2,
    9,
    10,
    11
   ],
   "fu": [],
   "tag": []
  }
 },
 "umraf": {
  "name": "Umra_F",
  "initials": "UF",
  "color": "#0f766e",
  "cq": 81,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 14,
  "params": {
   "ss": 6,
   "etq": 2,
   "prob": 3,
   "sol": 3,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 4 of 12 audits, for example on the Negative Sentiment case (Call). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 3 of 12 audits, for example on the Negative Sentiment case (Call). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   },
   {
    "cat": "sol",
    "label": "Solution & Rec.",
    "text": "Lack of ownership on resolution flagged in 3 of 12 audits, for example on the Negative Sentiment case (Call). Own the resolution end to end: raise the right request, set a clear timeline and make sure the customer knows exactly what happens next."
   }
  ],
  "cases": [
   {
    "query": "Negative Sentiment",
    "score": 57,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order in store and Cx said that he is facing the issue with the Invoice and Cx is yet to pick up the Order . JC informed the Cx will be receiving an call back for the same from the store team . Need to check the Cx concern and act accordingly. BOD ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Cx missed an call and call us back . JC checked and the Order was returned back to us and JC checked the details one of the product has been delivered and once of the SKU has been returned back to us . Cx said that no calls received the from BD and needs refund for the same , JC has raised 15 days MB and needs more apology on call and need to try for Retention like redispatching or adding the amount to Cx profile ."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Payment is getting debited from the Bank Account , JC checked the details and no amount is debited from us and DG payment done via Phone Pe and informed the Cx to call the CC of PP . Needd more probing on cal like inform the CX that the Payment has been deboted for DG and how the same can been soled and get the refund ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have thr product to be returned since the length is not suiting the Cx . Need more Retention effort on call . Return pick up informed ad TAT informed . Later on Cx asked for the refund . JC needs o sound a little more actiev on call . Need a little more ownership on call ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 71,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wants to know the delivery status of the Order , dispatch and delivery is getting delayed , JC informed the details . TAT informed . Cx was asking for an Manager Call back and Cx will be travelling and he wont be available for receive the delivery of the Order . Tone needs to be woked on and need not rush and repeative the same details on call ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Order delivery status , dispatch has been delayed and the EDD for the Order will be on 12th October . Need apology and empathy on call for the delay in delivery . Cx was asking for the store pick up ."
   },
   {
    "query": "Order Cancellation",
    "score": 94,
    "ncf": false,
    "date": "Call",
    "comment": "Due to delay in dleivery of the Order Cx has cancelled the Order and not received the refund . JC checked the details and informed the update . TAT given for the refund . Hole Procedure needs to be worked on . KF has been raised by Emails team and still in process ad JC has shared he email to the Cx as the Cx asked for ."
   },
   {
    "query": "Repair Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs the Repair update for the product dropped to the Store . JC checked and informed that the Order is yet to be dispatched and will check and get back to the Cx with in 9 Pm and JC was connected over the WA with the Cx and shared the update for the repoair Order delivery . No apology for the delay happened for repair and empathy needed."
   },
   {
    "query": "General Policy Query",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "CX has enrolled for POP and only done with 1 month Payment .Since the Cx didnt utilized the same for purchase the amoumt was convereted to DG with 3% of deductions and Cx was asking for the refund of the full amount where as the per the CL policies the same cant been done . JC informed the detaiks with teh Cx but the Cx was not able to understand the same and was asking for the refund . It would be better that JC would check the Cx language preference. BOD."
   },
   {
    "query": "Digi Gold Sell-back (Withdrawal)",
    "score": 94,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has enrolled for DG in 2024 and now he wish to sell the same and the same is not happening and JC informed the Cx that she will check and call back . Cll back done and jC informed the Cx that the DG was purchased from PHONE PE Cx needs to reach out to CC of PP and they wil be able to assist the Cx . CSAT needs to be seeked post solving the Cx query and not before that . Cx needs to change his Bank account details and JC over all assisted the Cx."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has given the products for repair and needs to know the update on the same . Cx needs to know the status , JC needs to check the KF raised date since ist the same day JC receoved the call and TAT and process needs to be informed clearly to the Cx . Repair charges any Cx will be receiving an call the needs ti be informed ."
   },
   {
    "query": "Product Broken / Damaged",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Good work!!"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    3,
    4,
    5,
    7
   ],
   "etq": [
    6,
    9
   ],
   "prob": [
    0,
    2,
    10
   ],
   "sol": [
    0,
    1,
    3
   ],
   "fu": [],
   "tag": []
  }
 },
 "karthikn": {
  "name": "Karthik_N",
  "initials": "KN",
  "color": "#1d4ed8",
  "cq": 80,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 14,
  "params": {
   "ss": 9,
   "etq": 4,
   "prob": 0,
   "sol": 1,
   "fu": 0,
   "tag": 0
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 4 of 12 audits, for example on the Refund Status / Delay case (Call). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   },
   {
    "cat": "etq",
    "label": "Etiquette",
    "text": "Long hold / delayed chat response flagged in 3 of 12 audits, for example on the Delivery related case (Call). Keep holds under 45 seconds and chat responses prompt. If you need longer, come back and update the customer."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missing positive/ownership phrases flagged in 2 of 12 audits, for example on the Order Tracking / Status case (Call). Use ownership phrases such as \"I will personally check this for you\" or \"Let me make sure this gets resolved\" instead of neutral or negative wording."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs to know regarding the INTL Order delivery status . JC informed that he will be arraning an call from the INTL Team . Cx was informing that he is not getting any update for the same and is getting delayed in delivery . CSAT picth needs to be avoided since cX quey is not resolved ."
   },
   {
    "query": "General Policy Query",
    "score": 71,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has enroled for DG via Phone Pe and needs to know regarding the same . JC informed the Cx that the same needs to be checked with the Phone Pe Cxustomer service since we cant check the details and Cx agreed . JC needs to infor the CX that since the enrollment is done via PP only they hav ethe access to view and assist the Cx and we dont have ,Need apology and empthy on call."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order # Y2055EC0 and due to delay in delivery of the Order Cx was irate and needs the dleivery to be done asap . Order was delivered on the same day . Dead air needs to be avoided and need empathy on call ."
   },
   {
    "query": "Repair Status / Logistics",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has given the product for repair , Cx needs to k ow the repair update , JC informed that he will be arranging an call back from Store since the product has been delivered to the store and over all the call handeling was fine ."
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "customer requested an update on delivery. The agent raised a ticket and shared the required details with the customer; however, the agent needs to ensure sentences are fully completed during communication. Overall communication needs to be more polished"
   },
   {
    "query": "Delivery related",
    "score": 94,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know the delivery update as previousl in the app it stated delaivery by 14th OCT however if the same was not possible by next day 12PM then cx requested the delivery on saturday. Avoid long hold"
   },
   {
    "query": "Refund Status / Delay",
    "score": 81,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to cancel the order placed, cx wanted to know the exact amount that will be transferred to cx wallet, need to provide more polished info to cx as cx was getting confused throught the explanation."
   },
   {
    "query": "Refund Status / Delay",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "customer cancelled an order, and the balance was transferred to their profile balance. The customer called requesting a money refund. JC repeated details already shared and failed to place the call on hold while checking details, causing long silent gaps and this could lead the customer to repeatedly ask for updates. On a positive note, the refund process was explained clearly and the request was raised."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx shaya order was paid by agent later she had multiple done & she felt uncomfertable, Jc sounded underconfident & the payment informations were not clear."
   },
   {
    "query": "Delivery related",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Shaya order delay cx wanted update on the same, however raising concern multiple time the product was not dispatched , JC was monotonus call was not placed on hold & the response was assuring the cx"
   },
   {
    "query": "Delivery related",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx order was delayed JC did not provide an accurate info however JC should avoid repeting himself"
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \nCx wanted to return as the product was very small not fetting her ears, need to improve retention pitch & polished tone"
   }
  ],
  "paramCaseMap": {
   "ss": [
    0,
    1,
    2,
    4,
    6,
    7,
    8,
    9,
    10
   ],
   "etq": [
    5,
    6,
    7,
    9
   ],
   "prob": [],
   "sol": [
    11
   ],
   "fu": [],
   "tag": []
  }
 },
 "chanchals": {
  "name": "Chanchal_S",
  "initials": "CS",
  "color": "#be123c",
  "cq": 79,
  "audits": 12,
  "ncf": 1,
  "totalErrors": 13,
  "params": {
   "ss": 8,
   "etq": 1,
   "prob": 1,
   "sol": 1,
   "fu": 0,
   "tag": 2
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "1 NCF this month (Order Tracking / Status). This month's Inbound NCFs were either rude or argumentative handling of an upset customer, or incorrect process information on Shaya repairs and store-order moneyback. Let the customer vent and acknowledge before you explain, and confirm the SOP before committing."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 3 of 12 audits, for example on the Order Tracking / Status case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 3 of 12 audits, for example on the Repair Request case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Order delivery status , Address check done . Cx has shared the address and JC updated . Intereption needs to be avoided . BOD . Need more positive phrases on call since the delivery of the Order is gettong delayed . Cx was having an query on the Order delivered which is yet to be marked delivered and JC informed the same will be updated ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Call was transfered to post sale team and call was blank and JC tried reaching he Cx but no response and SMS shared ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "Call",
    "comment": "Cx has placed an Order for GC and the same is not delivered and CX wants call back from the Manager and Cx is irate , JC was interepting the Cx on call . JC sounded rude on call . Sounded like JC was kept on aruging with the Cx and JC infomreed the Cx that she has done what ever she can she has done and will arrange the call back ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 90,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has cancelled an Order and amount is added to profile and cx was looking for placing an New Order . Cx needs assistance for the placing the Order . JC guided the Cx fpr making the payment and placing an Order . Cx was not able to place the Order since the profile balance is not visible in the profile and Tech issue . JC informed that she will check and get bakc by 5 Pm on the same day. Need more apology on call."
   },
   {
    "query": "General Policy Query",
    "score": 56,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has purchased an product of 9 KT and the sane ha sbeen became brown colour with in few months . Probing needs to be done from JCs end . Placing the call on hold without the Cx is not as per process. JC asked to share the piccs ofthe same to be shared ti her via WA so that she can check and update the details . No empathy and apology on call . Tagging Missed ."
   },
   {
    "query": "Repair Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wants to know the repair status of the Order and JC checked and informed the details . Dead air needs to be worked on ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx said that the SHAYA Product purchased is not worth as seen per the image and wish to have the same returned in 15 days MB . Cx needs refund only and not willing to go with exchange . Hold needs to be worked on ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to have the product returned under 15 days MB . Dead air needs to be avoided. Make the Cx repeat the query which needs to be avoided BOD. Cx has purchased the product twice , Retention tried but Cx needs MB only."
   },
   {
    "query": "Return Initiation / Request",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order # Q3355ECD and raised for return for 15 days MB but the same can been taken in 15 days exchange Only since TC amoujt has been utilized in the Order and the previous JC missed to check and JC informed the details and process to the Cx and over all TAT for the process too . Cx was convienced ."
   },
   {
    "query": "General Policy Query",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has enrolled for POP and no Cx wish to have the same to be cancelled and processed with the refund . JC checked for the details and JC informed like the amount cant been refunded as per CL Policies but he JC needs to add also like the plan is basically for purchase and only Jewel purchase can been done . Need more probing on call ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has given the product for LTB in Store on 30th Sep and sue to Medical Emergency Cx needs the refund to be done asap and due to the Bank Account updated the Cx was not getting the refund done and later on Cx has updated the New Bank account and received Rs.1 for confirmation and Cx needs the amount to be refunded since he needs the same for medical emergency . JC informed the refund will be done asap and the product is returned on 30th Sep and TAT will be 4-7 working days needs to be informed . A lttile empathy on call needs to be there . WA connectivity informed ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "Retention \nThe products were not as per cx expections she wanted refund did not want profile balance"
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
    10
   ],
   "etq": [
    4
   ],
   "prob": [
    9
   ],
   "sol": [
    2
   ],
   "fu": [],
   "tag": [
    0,
    4
   ]
  }
 },
 "shazunnisas": {
  "name": "Shazunnisa_S",
  "initials": "SS",
  "color": "#0369a1",
  "cq": 78,
  "audits": 12,
  "ncf": 0,
  "totalErrors": 17,
  "params": {
   "ss": 10,
   "etq": 1,
   "prob": 2,
   "sol": 2,
   "fu": 0,
   "tag": 2
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Missed empathy flagged in 4 of 12 audits, for example on the Return Initiation / Request case (Call). Acknowledge the customer's situation and apologise for any delay or inconvenience before moving to the process. A sincere, specific apology in the first response changes the tone of the whole interaction."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Monotonous or dragging delivery flagged in 2 of 12 audits, for example on the Refund Status / Delay case (Call). Bring energy and variation into your voice. A flat or dragging delivery reads as disinterest even when the resolution is right."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 2 of 12 audits, for example on the Return Initiation / Request case (Call). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   }
  ],
  "cases": [
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wish to change the product and wish to place an New Order , JC denied the same since the product is getting ready for dispatch and Cx asked to have the same cancelled . JC informed that she iwll mark the product RTO and internal words needs to be avoided . Later on Cx said not to mark RTO for the Order . Need to check the reason for the cancellation and need to work on valid probing and inform the Cx that post RTO done the amount will be added to profile and Cx can place the New order ."
   },
   {
    "query": "Return Initiation / Request",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has raised an return but the same has not been picked up . Cx didnt liked the product . Retention needs to be tried but the JC has approved for the MB . Need empathy on call and no retention effort on call ."
   },
   {
    "query": "Store Complaint",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has used 15 days exchange amount to make an purchase of the Order # EZBLRSJP3245L-JM and Cx needs to know the GWD for the same product and Store team has raised the KF for the same but the same has been rejceted because its an 15 Days exchange and the amount will be added to profile ony and not to teh Bank account , JC informed the details but misse to inform the details like 15 days exchange amount has been use in the Order and the same can been only credited to Cx profile not to Bank Account. Valid probing needed and apology missed."
   },
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx needs the Order delivery status and JC checked and informed the details . Order was delivered on the same day . Need apology for the mess happened and inform the CX that Order is OFD and dead air on call needs to be avoided ."
   },
   {
    "query": "Refund Status / Delay",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on her order Marquise Strips Reversible Diamond Hoop Earrings. refund was delay. JC needs to be more assuring & confident while communicating to cx"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on her suidhaga earring, As it showed out for delivery. sounded muffaled need to be more confident & polished on the call"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx order delivery was not clear witht he product details, JC could ahve been more polished while . could have pitched buy one get one offer"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on the order deliveryjc shared the info however failed to tag"
   },
   {
    "query": "Delivery related",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on the order delivery JC shared the AWB number. the communication was incomplete."
   },
   {
    "query": "Payment Reversal / General Refund",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx payment failed, JC assisted cx with the info that there may be sync issue if it does not get through the same would be refunded to th source. should have checked if we have received the payment or not & provided accurate solution to cx"
   },
   {
    "query": "Return Initiation / Request",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "customer called seeking an update on her exchange request as well as information regarding her previous orders. The JC needs to practice active listening to address all customer queries accurately and display greater confidence when delivering information, incorrect taging selected."
   },
   {
    "query": "Order Status / Tracking",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted an update on her order as the oder was delay in dispatch, JC sounded monotonus need to be assuring. cx felt unherd on the call"
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
    8,
    9,
    10,
    11
   ],
   "etq": [
    4
   ],
   "prob": [
    0,
    2
   ],
   "sol": [
    1,
    6
   ],
   "fu": [],
   "tag": [
    7,
    10
   ]
  }
 },
 "muzakirn": {
  "name": "Muzakir_N",
  "initials": "MN",
  "color": "#16a34a",
  "cq": 67,
  "audits": 12,
  "ncf": 1,
  "totalErrors": 17,
  "params": {
   "ss": 9,
   "etq": 1,
   "prob": 2,
   "sol": 2,
   "fu": 0,
   "tag": 3
  },
  "aois": [
   {
    "cat": "ss",
    "label": "Soft Skills · NCF",
    "text": "1 NCF this month (General Policy Query). This month's Inbound NCFs were either rude or argumentative handling of an upset customer, or incorrect process information on Shaya repairs and store-order moneyback. Let the customer vent and acknowledge before you explain, and confirm the SOP before committing."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Grammar / addressing errors flagged in 4 of 12 audits, for example on the Return Initiation / Request case (Call). Re-read before you send. Check the customer's name, spelling and sentence structure, because one small slip makes the whole reply look careless."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Tone not inviting flagged in 2 of 12 audits, for example on the Lifetime Exchange (LTE) Request case (Call). Keep the tone warm and open so the customer feels comfortable asking follow-up questions, especially when they are frustrated."
   }
  ],
  "cases": [
   {
    "query": "Repair Status / Logistics",
    "score": 86,
    "ncf": false,
    "date": "Call",
    "comment": "Repair Status for the product # EZDELSTXD96FP-JR , Cx has received an SMS that the order will be delivered soon . JC checked and informed upfate , CX wants to know the Order delivery to the Store or not . JC informed that he will inform the store team to call the Cx . Need to work on probing and answer the Cx query directly based on calls received ."
   },
   {
    "query": "Digi Gold Sell-back (Withdrawal)",
    "score": 100,
    "ncf": false,
    "date": "Call",
    "comment": "CX asked the JC to slower down the speed but JC did normal call opening only . Cx said that Rs. 500 / - is getting debited from his Bank account from Phone Pe and amount is getting debited for DG . JC shared the Phone pe CC care no and asked the Cx to call them ."
   },
   {
    "query": "Lifetime Exchange (LTE) Request",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has purchased the product on 2018 and due to system issue or ERP migratition we are not able to check the details . JC informed the Cx to visit the store and they can help the Cx . Cx wants to go with LTE and value needs to upated . Cx was asking the details like why the details are not upated and whey he needs to go to the store .JC needs to a little more polite on call and inform the Xx that due to ERP migiration the old data cant been fetched and back end is working on the same and for this case Cx is pleased to visit the store . Need more probing on call"
   },
   {
    "query": "15-Day Exchange",
    "score": 88,
    "ncf": false,
    "date": "Call",
    "comment": "Cx was facing issue with her Exchange Order and JC checked nd informed the Cx and also informed tha he will check and get back . JC tried reaching the Cx with an update but the call went unanswered . SMS sent . Tagging Missed ."
   },
   {
    "query": "Order Cancellation",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted update on the cancelled order.allow the cx to finish understand the cx query & assit with solution do not overpower."
   },
   {
    "query": "Return Initiation / Request",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "cx expressed dissatisfaction, JC was confused in the call.told JC product name & stated the order ID. failed to dispose the lead"
   },
   {
    "query": "General Policy Query",
    "score": 0,
    "ncf": true,
    "date": "Call",
    "comment": "Cx lost his product & wanted to understand about the brand insurance, Could have told cx our products r insure if any damage during order deliveryor transit. Did not take any snip or request for any proof from cx. sounded rude on the call."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "miss spelled the prduct name, overpowering the cx did not allow the cx to finish the convo. did not sound customer centric was rude on the call conversation did not go well. do not be robotic repet same thing allow cx to speak. ur here to listern to cx & help."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "call was very much audible intrupted the cx while explining, making cx repet is not good practise. adressed incorrectly mam to sir."
   },
   {
    "query": "General Policy Query",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "cx said his friend ac got frud transection ID, JC did not understand the cx query did not allow cx to explin. made the cx repet the issue multiple time. also aoid repeting same thing over & over again."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\ncustomer called with a refund-related query, and the JC provided the transaction ID. However, the JC needs to work on their overall communication skills during customer interactions."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "customer requested same-day delivery within 30 to 40 minutes as she would be unavailable for the following week. During the interaction, the JC was overbearing and spoke over the customer. As a tenured agent, the JC needs to demonstrate better active listening, adapt to the customer's needs, and maintain a polished, professional tone"
   }
  ],
  "paramCaseMap": {
   "ss": [
    2,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11
   ],
   "etq": [
    7
   ],
   "prob": [
    0,
    2
   ],
   "sol": [
    6,
    9
   ],
   "fu": [],
   "tag": [
    3,
    5,
    7
   ]
  }
 },
 "noorjahanr": {
  "name": "Noorjahan_R",
  "initials": "NR",
  "color": "#15803d",
  "cq": 52,
  "audits": 12,
  "ncf": 2,
  "totalErrors": 24,
  "params": {
   "ss": 7,
   "etq": 2,
   "prob": 5,
   "sol": 6,
   "fu": 0,
   "tag": 4
  },
  "aois": [
   {
    "cat": "sol",
    "label": "Solution & Rec. · NCF",
    "text": "2 NCFs this month (Order Tracking / Status, Return Initiation / Request). This month's Inbound NCFs were either rude or argumentative handling of an upset customer, or incorrect process information on Shaya repairs and store-order moneyback. Let the customer vent and acknowledge before you explain, and confirm the SOP before committing."
   },
   {
    "cat": "ss",
    "label": "Soft Skills",
    "text": "Long dead air flagged in 5 of 12 audits, for example on the General Policy Query case (Call). Avoid long silences. If you are checking something, tell the customer what you are doing and keep them engaged so they never have to ask whether you are still there."
   },
   {
    "cat": "prob",
    "label": "Probing",
    "text": "Irrelevant or insufficient probing flagged in 5 of 12 audits, for example on the Order Tracking / Status case (Call). Probe with purpose: ask the questions that confirm the order, the exact concern and what the customer expects before giving a resolution."
   }
  ],
  "cases": [
   {
    "query": "Order Tracking / Status",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx has placed an Order # EZCHNVRM1D95G-JM and its an HIGH Value Order the same is hot getting delivered and Cx is irate due to the delay . Cx asked that where is the product is getting manufactured JC was not able to answer the same . JC was suppose to raise an emaul of check with the buying team for the faster delivery but informed that she will inform the store team to check on the sme lack of ownership . Interption needs to be avoided on call . QC for the Order has been rejected on 30th Sep JC missed to check and inform the Cx that Order will be delivered on 7th Oct ."
   },
   {
    "query": "Order Tracking / Status",
    "score": 0,
    "ncf": true,
    "date": "Call",
    "comment": "Cx wants to know regarding the SHAYA repair and JC informed that she can check with the Store team . JC informed to check with the store team and No shared the no of teh store and infprmed JC name . Where as the Store team wont be having any update on the SHAYA repair . JC need to be aware of the Process"
   },
   {
    "query": "General Policy Query",
    "score": 33,
    "ncf": false,
    "date": "Call",
    "comment": "Cx is not able to pay for TC installment and needs assistance . CX was suppose to chceck and if not able to find the details needs to check with the Cx for the phone no or email id used on enrolling TC , Lack of ptobing and no pology or empathy on call since Cx is not able to make the Payment and JC informed the CX to refresh the app or login again and Cx was not able to understand the same call was disconnected . JC called the CX again but no response , SMS misses to share."
   },
   {
    "query": "Lifetime Buyback (LTB)",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Cx wants to know regarding the LTE & LTB Value details and post that he will placing the Order . JC informed the details the process of LTE & LTB but the same needs to be a explianed more clearly . Cx question is that if he wish to sell his product post 6 Months of purchase the same can been done and JC informed the process but misse dto inform the Caluculations . Tagging Missed ."
   },
   {
    "query": "General Policy Query",
    "score": 63,
    "ncf": false,
    "date": "Call",
    "comment": "cx wanted to know update about the CTC policy. cx alredy informed she have placed the order however the jC made the cx repet the info, Also not aware about the CTC policy. Call was not placed on hold while checking the info. Need significent improvement"
   },
   {
    "query": "Return Initiation / Request",
    "score": 0,
    "ncf": true,
    "date": "Call",
    "comment": "Retention\nproduct was not suting cx so she wanted to return the product, Cx wanted to return MB JC gave incorrect info of store order moneyback. NCF given for Incorrect info."
   },
   {
    "query": "Shaya Order Status / Tracking",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "customer was irate as the color of her Shaya mangalsutra had worn off. The JC interrupted the customer while she was explaining the issue, which escalated her frustration further. The agent jumped straight to a solution without active listening or acknowledging the customer's pain point. do not ask cx for the actual product image stating we do not have the actual product.\nAreas for Improvement: Active listening (allowing the customer to complete their statement) and demonstrating empathy before offering solutions."
   },
   {
    "query": "Order Tracking / Status",
    "score": 44,
    "ncf": false,
    "date": "Call",
    "comment": "Customer reported that the customized bracelet was received without the requested engraving. Instead of arranging a reverse pickup to send the item back to the factory for correction, the JC unnecessarily redirected the customer to a physical store for an exchange/resolution. incorrect disposition selected"
   },
   {
    "query": "Return Initiation / Request",
    "score": 69,
    "ncf": false,
    "date": "Call",
    "comment": "Customer requested a return as the pendant size was smaller than expected. The JC made the customer repeat the return reason, did not converse in the customer’s preferred language, and left long dead air instead of placing the call on hold while checking information. Tone needs to be more refined and professional.\nActive listening (avoiding repetition), preferred language communication, hold etiquette, and professional tone polish"
   },
   {
    "query": "Return Initiation / Request",
    "score": 50,
    "ncf": false,
    "date": "Call",
    "comment": "Retention\nCustomer reported that the ordered chain was too small and requested a return. The JC interrupted the customer mid-conversation and missed asking probing questions to gather clearer details about the sizing issue. On a positive note, the agent successfully retained the customer.\n\nAreas for Improvement: Cx had to seek response, Active listening (avoiding interruptions) and effective probing to gather complete information."
   },
   {
    "query": "Refund Status / Delay",
    "score": 75,
    "ncf": false,
    "date": "Call",
    "comment": "Customer requested a return for their Shaya order due to no further requirement. The JC made the customer repeat previously shared information and maintained a monotonous tone throughout the interaction.Focus on active listening, seamless context handoff, and maintaining an engaging, empathetic tone, also cx had to seek response towards the end while checking or doing any back end task plase the call on hold informing the cx."
   },
   {
    "query": "Return Initiation / Request",
    "score": 94,
    "ncf": false,
    "date": "Whatsapp",
    "comment": "Retention\n\ncustomer wanted to cancel her order due to selecting the wrong size. The JC pitched store credit/profile balance, but the customer requested a refund back to her credit card instead. The JC appropriately honored the request and raised the refund ticket"
   }
  ],
  "paramCaseMap": {
   "ss": [
    2,
    4,
    6,
    7,
    8,
    9,
    10
   ],
   "etq": [
    5,
    8
   ],
   "prob": [
    0,
    1,
    2,
    6,
    9
   ],
   "sol": [
    1,
    3,
    4,
    5,
    7,
    9
   ],
   "fu": [],
   "tag": [
    1,
    3,
    7,
    11
   ]
  }
 }
};
const PARAM_LABELS = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution & Rec.", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_SHORT = {"ss": "Soft Skills", "etq": "Etiquette", "prob": "Probing", "sol": "Solution", "fu": "Follow Up", "tag": "Tagging"};
const PARAM_COLORS = {"ss": "#ea580c", "etq": "#db2777", "prob": "#2563eb", "sol": "#dc2626", "fu": "#16a34a", "tag": "#7c3aed"};
