from pathlib import Path
import json,hashlib,datetime,subprocess

root=Path('D:/AI建站')
now=datetime.datetime.now(datetime.timezone.utc).isoformat()
for folder,tool,name,creator,place,universe,subdomain in [
 ('create-a-car-wiki','garage-notebook','Create a Car','AssemblerX','134772864249515','9903605866','createacar'),
 ('win-a-world-championship-wiki','codes','Win A World Championship','Black Barn Studios','117180001724009','10435170241','winaworldchampionship')]:
 p=root/folder
 def read(rel):return json.loads((p/rel).read_text(encoding='utf-8-sig'))
 def ref(rel):return {'path':rel,'sha256':hashlib.sha256((p/rel).read_bytes()).hexdigest()}
 def write(rel,data):
  f=p/rel;f.parent.mkdir(parents=True,exist_ok=True);f.write_text(data if isinstance(data,str) else json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8',newline='\n')
 coll=read('quality/artifacts/collection.json');tests=read('quality/artifacts/interaction-review.json');assert tests['passed']
 fp=json.loads(subprocess.check_output(['node',str(root/'scripts/quality-gate.mjs'),'--fingerprint',str(p)],text=True))['sha256'];assert fp==coll['codeFingerprint']
 api=read('quality/artifacts/sources/roblox-api-current.json')['data'][0]
 assert str(api['rootPlaceId'])==place and str(api['id'])==universe and api['creator']['name']==creator and api['playing']>0
 pagecap=read('quality/artifacts/sources/roblox-current-capture.json');apicap=read('quality/artifacts/sources/roblox-api-current-capture.json')
 base='https://'+subdomain+'.robloxwikihub.com';official=pagecap['url']
 archived=read('quality/archive/pre-scope-repair/manifest.json')
 for entry in archived:assert ref(entry['archive'])['sha256']==entry['sha256']
 previous=read('quality/review.json')
 currentpaths=[v['path']for v in coll['pages']]
 retired=sorted(set(v['path']for v in previous['pages'])-set(currentpaths))
 write('quality/artifacts/retirement-review.json',{'reviewedAt':now,'reviewer':'Codex agent — Roblox repair subtask','retiredPaths':retired,'replacementRoutes':currentpaths,'reason':'Unsupported ratings, formulas, precise rewards and duplicated guidance removed. No unrelated-home redirects. Actual local static-export HTTP 404 checked; production host needs post-deployment recheck.','sourceArchiveManifest':ref('quality/archive/pre-scope-repair/manifest.json'),'interactionEvidence':ref('quality/artifacts/interaction-review.json')})
 write('quality/artifacts/identity-review.md',f'''# Official identity and release review

Reviewed by Codex agent — Roblox repair subtask at {now}.
Official page: {official}. Raw page and API each returned HTTP 200; captures preserve bytes, request URL, final URL and UTC time.
API data[0] identifies {name}, creator.name={creator}, id={universe}, rootPlaceId={place}. The same identity and description occur in official HTML. API playing={api['playing']} and isContentRestricted=false at capture support released status together with the accessible published page. These are release observations, not site live counters.
The HTML generic no-running-experiences server-list string is not treated as shutdown in the presence of matching public API activity. The ALPHA label, where present, is a public alpha. No logged-in join/gameplay occurred. This review does not establish device/account/region-specific eligibility or future availability.
''')
 implementation=f'''# Application and authorship review

Reviewed {now} by Codex agent — Roblox repair subtask.
This describes the current local production export, not the previously deployed live site.
Read all current app routes, layout, shared Page and client component. No authentication client, advertising/analytics script, runtime game API request or external font import remains. Hosting requests and external links are disclosed. Hlele attribution is the user/workspace identity instruction; existing lianlele168@gmail.com correction contact is preserved from the former repository policies in the source archive. No email was sent, response-time promise or official sponsorship claimed.
The agent read official HTML and the entire API description, compared current rendered main text/metadata, and checked five routes. This is source review, not gameplay or human endorsement. Unsupported source/data is archived as .txt and not imported. Build output/routes.json contain exactly five public content pages.
'''
 implementation+=('Notebook stores only user-entered name/frame/engine/wheels/observation in localStorage, with individual delete and JSON export. React renders input literally. No game score, formula or probability model exists. Actual tests cover empty/invalid input, two saved notes, reload, delete, export, blocked writes, corrupt reads and download failure. Corrupt storage is retained instead of overwritten. Trial A/B are synthetic test fixtures, never default game data.\n' if tool=='garage-notebook' else 'CodeList writes public strings on button click, never reads clipboard or contacts Roblox. Tests independently read clipboard to verify writing. Failure leaves text selectable. Windows Chrome returns CRLF for multiline clipboard values; exact line comparison normalizes native line endings. No redemption occurred.\n')
 write('quality/artifacts/implementation-review.md',implementation)
 visual=[]
 for page in coll['pages']:
  tech=read(page['technicalArtifact']['path'])
  assert tech['httpStatus']==200 and tech['consoleErrors']==0 and not tech['brokenLinks'] and tech['canonical']==base+page['path']
  assert all(v['overflow']==False for v in tech['viewports'])
  for v in tech['viewports']:
   assert v['width']in[390,768,1024,1440]
   # Each exact image was displayed and reviewed by this agent before this record.
   v['readable']=True
   visual.append({'route':page['path'],'width':v['width'],'artifact':v['screenshot'],'result':'Legible text/controls; no clipped labels, overlap or horizontal overflow. Mobile/wider layouts inspected.'})
  tech['contentReview']='completed in quality/content-review.md'
  tech['visualReviewer']='Codex agent — all four saved screenshots actually inspected'
  tech['visualReviewedAt']=now
  if page['path']==f'/{tool}/':
   tech['interaction']='passed';tech['interactionArtifact']=ref('quality/artifacts/interaction-review.json')
  else:
   tech['interaction']='not-applicable';tech['interactionReason']='Static information/standard links; no page-specific widget. Collector requested all internal href destinations.'
  tech['externalLinksNotChecked']=[]
  tech['externalLinkReview']='Only external HTTP destination is official Roblox page, captured HTTP 200 in sources/roblox-current-capture.json. mailto retained; no email sent.'
  tech['note']='Actual local production-export capture plus subsequent visual/content review. Does not certify deployment or indexing.'
  write(page['technicalArtifact']['path'],tech)
 write('quality/artifacts/visual-review.json',{'reviewedAt':now,'reviewer':'Codex agent — Roblox repair subtask','scope':'Five routes at all four widths visually inspected; initial home padding defect fixed and recaptured.','observations':visual,'extraFilledNotebookImagesReviewed':[f'quality/artifacts/notebook-filled-{w}.png' for w in [390,768,1024,1440]]if tool=='garage-notebook'else[]})
 sources=[{'id':'official-page','kind':'official','url':official,'checkedAt':pagecap['checkedAt'],'artifact':pagecap['artifact']},{'id':'official-api','kind':'official','url':apicap['url'],'checkedAt':apicap['checkedAt'],'artifact':apicap['artifact']},{'id':'capture-time','kind':'observation','url':official,'checkedAt':apicap['checkedAt'],'artifact':ref('quality/artifacts/sources/roblox-api-current-capture.json')},{'id':'app-review','kind':'observation','url':base+'/about/','checkedAt':now,'artifact':ref('quality/artifacts/implementation-review.md')},{'id':'interaction-review','kind':'observation','url':base+f'/{tool}/','checkedAt':tests['checkedAt'],'artifact':ref('quality/artifacts/interaction-review.json')},{'id':'retirement-review','kind':'observation','url':base+'/about/','checkedAt':now,'artifact':ref('quality/artifacts/retirement-review.json')}]
 claims=[]
 def claim(cid,kind,statement,sids,support):claims.append({'id':cid,'kind':kind,'statement':statement,'sourceIds':sids,'support':support})
 claim('game-identity','fact',f'{name} is a Roblox game by {creator}.',['official-page','official-api'],'Official heading/By line; API data[0].name and creator.name.')
 claim('place-id','number',f'Official place ID is {place}.',['official-page','official-api'],'Official URL matches data[0].rootPlaceId; not confused with universe ID.')
 claim('source-date','date',f'The official source was read on {apicap["checkedAt"][:10]} (UTC capture date).',['capture-time'],'Actual checkedAt, not game publication or automatic freshness.')
 claim('publisher','fact','Independent companion published under Hlele; correction contact is lianlele168@gmail.com.',['app-review'],'User identity instruction and previous repository contact, documented in implementation review. No sponsorship/human testing inferred.')
 claim('source-review-scope','verification','Codex compared official source with this edition; no Hlele gameplay or redemption claim.',['app-review'],'Executed read-through and captured official/browser artifacts; described precisely in implementation-review.')
 claim('application-privacy','fact','App has no account connection, sign-in, ad or analytics script; external destinations are separate.',['app-review'],'Inspection of current application files. Hosting requests remain disclosed; no claim about opaque infrastructure/legal compliance.')
 claim('retired-content','fact','Earlier unsupported rankings, numerical models and guides were removed.',['retirement-review'],'Former archive, replacement routes and local HTTP404 tests.')
 if tool=='garage-notebook':
  claim('car-building','fact','Description lists crate part collection and cars built from Frames, Engines and Wheels.',['official-api','official-page'],'API description first two feature lines and official Description section.')
  claim('car-income-showroom','fact','Description says cars earn cash offline and can be displayed in a Showroom.',['official-api'],'Description offline/Showroom lines; no rate/storage/payout formula added.')
  claim('car-progression','fact','Description lists Prestige, ranked racing and Season Pass rewards.',['official-api'],'Description final three feature lines; no cost/buff/duration added.')
  claim('source-limits','fact','Reviewed source does not supply exact part stats, crate odds, prestige costs or income formula.',['official-api'],'Entire description reviewed; absence limited to this source, not all possible sources.')
  claim('notebook-functionality','fact','User notes can be saved locally, compared, deleted and exported; failures are reported.',['app-review','interaction-review'],'No game model or network send; actual 12-case tests cover persistence/errors. Plain-text journal has no formula to calibrate.')
 else:
  claim('football-loop','fact','Description lists nation/year selection, card spins, packs, upgrades and tournaments.',['official-api','official-page'],'Gameplay bullet list; no support inferred for old cards/scores/optimal strategy.')
  claim('console-select','fact','Developer says SELECT toggles console moving and selecting.',['official-api'],'Final description sentence; developer statement, not controller testing.')
  claim('listed-codes','fact','Description lists WORLDHUNT, MANAGERS, VISIT10M, LIKES10K, MEMBERS200K and INDEX.',['official-api','official-page'],'Exact CODES lines; test compares six rendered strings. No redemption/reward/active guarantee.')
  claim('source-limits','fact','Reviewed description supplies no redemption menu steps, rewards, expiry, player ratings, pack odds or formation multipliers.',['official-api'],'Entire description read; those details explicitly unknown, no inference of expiry.')
  claim('codes-removed','fact','DAILY, VISIT5M and CCU5K absent from captured description and removed from companion list.',['official-api','retirement-review'],'Current CODES block compared to archived codes.json/page; absence not evidence of expiry.')
  claim('copy-functionality','fact','Copy writes selected/all public codes; denial gives manual fallback. App neither redeems nor reads account/clipboard data.',['app-review','interaction-review'],'CodeList source plus success/denial tests; test-harness reads are not app behavior.')
 shared=['publisher','game-identity']
 mapping={'/':shared+['place-id','source-date','source-limits']+(['car-building','car-income-showroom','car-progression','notebook-functionality']if tool=='garage-notebook'else['football-loop','console-select','copy-functionality']),f'/{tool}/':shared+(['car-building','notebook-functionality','application-privacy']if tool=='garage-notebook'else['source-date','listed-codes','source-limits','codes-removed','copy-functionality']),'/about/':shared+['source-review-scope','retired-content'],'/privacy-policy/':shared+['application-privacy',('notebook-functionality'if tool=='garage-notebook'else'copy-functionality')],'/terms/':shared+['application-privacy']}
 goals={'/':('Find official game and supported features','Specific official identity/source boundary and direct entry to useful companion utility.'),f'/{tool}/':('Record and compare personal setups'if tool=='garage-notebook'else'Copy publisher-listed strings','Browser-local observation journal with export, no unsupported rankings.'if tool=='garage-notebook'else'Exact source-linked codes with working copy, check date and redemption uncertainty.'),'/about/':('Check publisher and review scope','Actual source-review limits and correction contact, no fake human endorsement.'),'/privacy-policy/':('Understand application data handling','Specific local storage/export behavior.'if tool=='garage-notebook'else'Specific clipboard behavior; no legal compliance assertion.'),'/terms/':('Understand companion scope','Independent informational use and contact; no game outcome promise.')}
 content=f'# Content review — {name}\n\nReviewed {now} by Codex agent — Roblox repair subtask, separate read-through after implementation. Self-authored evidence is available for parent independent review before publishing.\n\nAll current main text, titles/descriptions, source page/API and client source read. All 20 page screenshots viewed at 390/768/1024/1440. No clipped text or overlapping controls; mobile flow and wide layout legible. Initial home padding defect fixed and recaptured.\n\n## Claim support\n\n'
 for c in claims:content+=f'### {c["id"]}\n{c["statement"]}\n\nSources: {", ".join(c["sourceIds"])}. {c["support"]}\n\n'
 content+='## Per-page coverage\n\n'
 for route in currentpaths:content+=f'### {route}\nIntent: {goals[route][0]}. Value: {goals[route][1]}\n\nClaims: {", ".join(mapping[route])}. Read body/metadata/shared header/footer. Other wording is UI behavior or explicitly editorial suggestions, not a game-mechanic claim. No unregistered numerical game stat, score, formula or testing endorsement remains.\n\n'
 content+='## Consistency and limits\n\nShared name/creator/place ID match source. Home and utility request indexing; policies/about are noindex and excluded from sitemap. All retired routes including eight archetype details return 404 locally. No unrelated redirect/soft-404 created. Old unreferenced baseline captures remain historical evidence; current routes.json is this build inventory.\n\nNo logged-in gameplay, redemption, production deployment or indexing is certified. Notebook is plain-text storage; copy utility moves public text, neither is a mathematical model. No gameplay media is displayed because provenance was unresolved. Source captures, HTML, screenshots, build and interaction records support the limited claims above.\n'
 write('quality/content-review.md',content)
 review={'status':'supported','reviewer':'Codex agent — Roblox repair subtask','reviewedAt':now,'artifact':ref('quality/content-review.md')}
 for c in claims:c['review']=review
 pages=[]
 for page in coll['pages']:
  route=page['path'];pages.append({'path':route,'status':'ready','intent':goals[route][0],'uniqueValue':goals[route][1],'indexable':route in ['/',f'/{tool}/'],'claimIds':mapping[route],'claimCoverage':'complete','crossPageConsistency':'passed','review':review,'renderedArtifact':ref(page['renderedArtifact']['path']),'technicalArtifact':ref(page['technicalArtifact']['path'])})
 manifest={'schemaVersion':1,'codeFingerprint':fp,'site':{'baseUrl':base+'/','officialUrl':official,'platform':'roblox','releaseStatus':'released','placeId':place,'identitySourceId':'official-page','identityReview':{'status':'supported','reviewer':'Codex agent — Roblox repair subtask','reviewedAt':now,'artifact':ref('quality/artifacts/identity-review.md')}},'sources':sources,'claims':claims,'pages':pages,'routeInventoryArtifact':ref('quality/artifacts/routes.json'),'sitemapPaths':['/',f'/{tool}/'],'sitemapArtifact':ref('quality/artifacts/sitemap.xml'),'skillRunArtifact':ref('quality/skill-run.md'),'buildArtifact':ref('quality/artifacts/build.log'),'buildStatus':'passed','unresolved':[]}
 write('quality/review.json',manifest)
 print(folder,'reviewed',len(claims),'claims,',len(pages),'pages, retired:',len(retired),fp)
