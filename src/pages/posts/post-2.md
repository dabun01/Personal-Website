---
layout: ../../layouts/MarkdownPostLayout.astro
title: What Would a Modern NBA Expansion Draft Look Like? I Built a Website to Find Out
author: David Abundis
description: "My first article about basketball and tech where I built a site to simulate an NBA expansion draft"
image:
    url: "https://media.licdn.com/dms/image/v2/D4D12AQFk33XYIFzb6g/article-cover_image-shrink_720_1280/B4DaDHWM_kGkAQ-/0/1790050882219?e=1793836800&v=beta&t=4yH92JaNvm9yZ93YFOnxTKTwzV-GhyaCdslChAvpBRI"
    alt: "The word astro against an illustration of planets and stars."
pubDate: 2026-09-23
tags: ["nba", "tech"]
---

**Checkout the live website here:** [NBA Expansion Draft GM](https://nba-expansion-draft.vercel.app/)

### A little history of NBA expansion drafts
With an NBA expansion draft on the horizon, what would a modern one actually look like? I created a website to find out.

First let me give a little background on the expansion draft and the rules. The expansion draft occurs when new teams are going to join the NBA and they need a way to fill out a roster. The last expansion draft occurred on June 22, 2004 where the Charlotte Bobcats, now the Charlotte Hornets, selected 19 players. The most notable player they selected was Gerald Wallace, who made the All-Star game in 2010. 

### Expansion Draft Rules

- The expansion draft takes place prior to that year's draft

- Expansion teams will select a minimum of 14 players who are under contract or restricted free agents

- Expansion teams can only select one player from each team

- Only unprotected players are eligible to be drafted

- The existing teams can only protect 8 players

- Teams are permitted to enter into pre-Expansion draft trades involving players or draft picks

The last expansion draft to feature two new franchises was in 1995 when the Toronto Raptors and the Vancouver Grizzlies now the Memphis Grizzlies joined the league 

Rick Mahorn who was selected by the Minnesota Timberwolves in the 1989 NBA expansion draft but never played a single regular-season game for the franchise. Could something like this happen in the future expansion draft where a player refuses to report to his new team. 

The Lakers left Kareem Abdul-Jabbar unprotected in the 1988 expansion draft. Jerry West struck a deal with the Heat and the Hornets to guarantee they would pass on him. 

### What will a modern expansion draft look like?

> “Sources told ESPN last week that the league is targeting the 2028-29 season for the two expansion franchises to start playing.”

The draft pool to select from is better than ever with how deep some teams are. Teams will have to make tough decisions on who to protect and who to leave unprotected. An existing franchise can trade draft capital to an expansion team to not draft a certain player that was left unprotected. 

Expansion teams will have something extremely valuable: cap space. In this day and age, with contracts so lucrative and the first and second aprons handicapping teams, unloading a big contract for salary relief could net an expansion team serious value. Existing teams may give up draft capital to entice an expansion team to take on a bad contract. 

Both proposed cities for a potential NBA team are in the Western Conference. An existing franchise will have to switch conferences. For example either the Memphis Grizzlies or the Minnesota Timberwolves. The Timberwolves would be more interesting in the East because they are a contender while the Grizzlies are in rebuild mode.

I am a Spurs fan so I wanted to go through the roster and see who I personally would protect. The no-brainer selections for me were Wembanyama, Castle, and Harper. These guys are the team's future. My next protections are the supporting pieces with Vassell, Champagnie, Bryant, and Kornet. I would protect because of their complementary skills to the big 3. 

Right now the biggest question is should Fox be protected. His value around the league right now is extremely low coming off a poor showing in the NBA Finals. My biggest concern is his contract because soon Castle and Harper will have to be paid. An expansion team drafting Fox gives the Spurs a way out of his contract. I choose to protect Fox because I still believe he can help the Spurs win a championship. Unfortunately Keldon Johnson is left unprotected but he is a good player on a reasonable deal exactly the type of piece an expansion team would love to add. 

![My Spurs protection list on the site: green protected, red exposed](https://media.licdn.com/dms/image/v2/D4D12AQE8VxLqrFEzxw/article-inline_image-shrink_1000_1488/B4DaDHTee6KcAM-/0/1790050167448?e=1793836800&v=beta&t=uUqL_7s-em3TBAO7WcRj6BVOEzjC4FR0dUIJ_mFDKfE)


### Building the site

I wanted to build something NBA fans could actually play with, a tool that lets you step into the shoes of an expansion general manager and run your own draft. I built it with React and NodeJS, storing player and team data in MongoDB. I designed the frontend to feel familiar to NBA 2K, with a roster view built around that same visual language.

The core of the simulation is a custom value score. Each player gets rated not just on raw stats, but on production relative to their salary. A modestly-paid role player who quietly produces will score higher than a max-contract star who's declining which mirrors the real life decisions GMs will face when deciding who's actually worth protecting.

From there, you run the draft itself. You choose whether to control the Las Vegas or Seattle expansion team, and pick how the other 30 teams protect their rosters either automatically, using the value-score algorithm, or randomly (a pre-set "realistic" protection mode is coming soon). A navigation bar on the left lets you click through all 30 teams to inspect rosters, switch between a stats view and a salary-cap view, and a draft clock simulates the real time restrictions front offices face on draft night.

A future feature I am excited to explore and flesh out is the ability to make trades. As an expansion GM you will be able to make trades with the existing teams. I also want to add the ability to draft live against a friend to see who can build the better expansion team.  

It's still evolving, but the goal has always been the same: give fans a hands-on way to explore the same hard calls real front offices are about to face.

**Link to the site**: [NBA Expansion Draft GM](https://nba-expansion-draft.vercel.app/)

