/**
 * Species-specific catalog copy and sun exposure.
 * Run: node scripts/apply-tree-enrichment.mjs
 */
export const enrichments = {
  "american-beech": {
    sun: "part sun",
    habitat:
      "Rich, mesic forests across Maryland—often with sugar maple, oak, and tulip poplar on slopes and in cool valleys.",
    identification:
      "Smooth, steel-gray bark (often carved with initials in parks); long elliptical leaves with straight veins ending in teeth; long, narrow buds; papery marcescent leaves may cling on young trees through winter.",
    soil:
      "Moist, well-drained, fertile loam; tolerates shade but grows best with some canopy opening. Avoid droughty, compacted urban pits.",
    wildlife:
      "Beech nuts feed mice, squirrels, bears, and many birds when crops are good; large trees provide nest sites and cavities.",
    uses:
      "Hard, fine-grained wood for furniture and flooring; iconic park and forest tree valued for dense summer shade.",
  },
  "american-chestnut": {
    sun: "full sun",
    habitat:
      "Historically a canopy giant in Appalachian and piedmont forests; today most wild stems are stump sprouts and shrubs after chestnut blight.",
    identification:
      "Long, coarsely toothed leaves with prominent veins; once massive trunks with deeply furrowed bark; sprouts often cluster from old root crowns.",
    soil:
      "Well-drained, acidic to neutral slopes; sprouts persist on dry ridges where blight-tolerant hybrids are being trialed.",
    wildlife:
      "Formerly a mast bonanza for wildlife; surviving sprouts still support insects and occasional nut crops where trees briefly mature.",
    uses:
      "Breeding and restoration focus; durable rot-resistant wood when available; symbolic species for eastern forest restoration.",
  },
  "american-elm": {
    sun: "full sun",
    habitat:
      "River bottoms, terraces, and rich floodplains statewide; also widely planted along streets where disease-resistant cultivars are used.",
    identification:
      "Asymmetrical leaf bases and doubly serrated margins; interlacing vase-shaped crown on classic mature specimens; flat, round samaras.",
    soil:
      "Deep, moist soils with seasonal flooding tolerance; needs room for roots when planted as a street tree.",
    wildlife:
      "Seeds and buds feed birds; canopy hosts many caterpillars for songbirds; hollow trunks shelter wildlife.",
    uses:
      "Classic shade and street tree with resistant selections; wood for baskets and veneer historically.",
  },
  "american-holly": {
    sun: "part sun",
    habitat:
      "Acidic woods, coastal plain forests, and sandy pine barrens; common as an understory to midstory evergreen in Maryland.",
    identification:
      "Spiny, leathery evergreen leaves; dioecious—females bear red berries with a pollenizer male nearby; gray, smoothish bark.",
    soil:
      "Moist, acidic, organic-rich soils; tolerates some drought once established but not wet, alkaline clay.",
    wildlife:
      "Berries are critical winter food for many birds; dense foliage provides cover and nesting sites.",
    uses:
      "Ornamental screen and specimen; holiday greenery where sustainably collected; slow-growing landscape anchor.",
  },
  "american-hornbeam": {
    sun: "full shade",
    habitat:
      "Cool, shaded stream banks and rich understories; often in beech–maple or mixed hardwood forests.",
    identification:
      "Muscle-like fluted gray trunk (“musclewood”); doubly serrated leaves with many parallel veins; small nutlets in hop-like clusters.",
    soil:
      "Moist, well-drained alluvium; tolerates periodic inundation along quiet streams.",
    wildlife:
      "Catkins and buds feed birds; dense branching offers cover; supports diverse moth and butterfly larvae.",
    uses:
      "Naturalistic shade gardens and restoration underplanting; hard wood used for tool handles and mallets.",
  },
  "american-sycamore": {
    sun: "full sun",
    habitat:
      "Riverbanks, floodplains, and low fields—often the palest trunks visible along Maryland waterways.",
    identification:
      "Mottled exfoliating bark on upper trunk and branches; large maple-like leaves with three to five lobes; spherical fruit balls persist into winter.",
    soil:
      "Tolerates wet soils and occasional inundation; also succeeds on moist uplands with space for roots and crown.",
    wildlife:
      "Hollow trunks in old trees shelter bats, owls, and wood ducks; seeds eaten by finches and other small birds.",
    uses:
      "Fast shade for large parks; tolerant of tough urban riverfront sites if given soil volume.",
  },
  "american-witchhazel": {
    sun: "part sun",
    habitat:
      "Wooded slopes, rocky understories, and stream margins; unusual for blooming in late fall.",
    identification:
      "Strappy yellow autumn flowers with four narrow petals; broad leaves with uneven bases and wavy teeth; woody capsules eject seeds explosively.",
    soil:
      "Moist, acidic, well-drained humus; tolerates shade—often grows as a large shrub or small tree.",
    wildlife:
      "Late nectar for insects when little else blooms; seeds eaten by birds and small mammals.",
    uses:
      "Native ornamental for shade; traditional folk uses—verify modern safety before any medicinal use.",
  },
  "atlantic-white-cedar": {
    sun: "full sun",
    habitat:
      "Bogs, pocosins, and wet sandy pockets on the coastal plain; rare, localized stands in Maryland.",
    identification:
      "Scale-like evergreen foliage in flat sprays; small cones; narrow spire form in open stands.",
    soil:
      "Acidic, saturated to moist peat or sand; intolerant of drought and high pH.",
    wildlife:
      "Dense cover for birds; wetland structure important for specialized plant and animal communities.",
    uses:
      "Restoration of rare wetlands; rot-resistant lumber historically for shingles and boats.",
  },
  "bald-cypress": {
    sun: "full sun",
    habitat:
      "Swamps, millponds, and river edges on the coastal plain; “knees” often rise from roots in flooded soils.",
    identification:
      "Soft deciduous needles; conical crown when young; buttressed trunk and pneumatophores in standing water.",
    soil:
      "Tolerates prolonged flooding and compacted wet clay; also grows in moist uplands once established.",
    wildlife:
      "Cypress swamps shelter amphibians, wading birds, and woodpeckers; seeds used by waterfowl.",
    uses:
      "Stately park tree; valuable timber in the Southeast; stormwater and wetland plantings.",
  },
  "bitternut-hickory": {
    sun: "full sun",
    habitat:
      "Mixed hardwood forests, rich slopes, and bottomland edges; common associate of oak and maple.",
    identification:
      "Sulfur-yellow buds distinctive in winter; seven to nine narrow leaflets; small nuts with thin husk and very bitter kernel.",
    soil:
      "Moist, fertile, well-drained soils; tolerates occasional wet periods better than some hickories.",
    wildlife:
      "Nuts eaten by wildlife that cache mast; foliage supports many insects for breeding birds.",
    uses:
      "Strong, shock-resistant wood for tool handles; useful in naturalized plantings on good soils.",
  },
  "black-cherry": {
    sun: "full sun",
    habitat:
      "Old fields, edges, and disturbed woods—often among the first hardwood pioneers; also in mature forest gaps.",
    identification:
      "Dark, flaky bark on older trunks; long narrow leaves with fine teeth; white spring flower racemes; dark purple cherries in summer.",
    soil:
      "Adaptable from dry, poor soils to moister sites; intolerant of waterlogging.",
    wildlife:
      "Fruit feeds dozens of bird species; flowers attract bees and flies; host plant for many sphinx moths and butterflies.",
    uses:
      "Fine furniture wood; fast wildlife tree for edges; avoid planting where livestock browse wilted foliage (toxic).",
  },
  "black-locust": {
    sun: "full sun",
    habitat:
      "Native to Appalachian coves but widely naturalized on roadsides, old mines, and sunny waste ground in Maryland.",
    identification:
      "Compound leaves with paired oval leaflets; hanging white fragrant racemes; thorns on saplings and some branches; rough furrowed bark.",
    soil:
      "Thrives on poor, droughty, alkaline soils where little else establishes; fixes nitrogen with symbiotic bacteria.",
    wildlife:
      "Excellent spring nectar for bees; seeds sparingly used by birds; can form dense thickets for cover.",
    uses:
      "Erosion control and mine reclamation; rot-resistant posts; manage spread—can be aggressive outside native range.",
  },
  "black-maple": {
    sun: "part sun",
    habitat:
      "Rich coves and lower slopes, often mixed with sugar maple in western and central Maryland.",
    identification:
      "Similar to sugar maple with droopy leaf tips and often three lobes; milky sap; furrowed bark on older trunks.",
    soil:
      "Deep, moist, well-drained loam; tolerates shade as a maple subcanopy tree.",
    wildlife:
      "Samara seeds for birds and small mammals; spring flowers for early insects; fall color for people and pollinators on warm days.",
    uses:
      "Sugar syrup potential where tapped; timber grouped with hard maple; shade tree on suitable sites.",
  },
  "black-oak": {
    sun: "full sun",
    habitat:
      "Dry ridges, barrens, and upland oak forests; common on thin soils in Maryland piedmont and mountains.",
    identification:
      "Red oak group—bristle-tipped leaf lobes; dark blocky bark; acorns with inner hairs in the cup.",
    soil:
      "Well-drained, acidic, often droughty; tolerates low fertility once established.",
    wildlife:
      "Acorns feed many species; rough bark supports lichens; cavities in old trees shelter wildlife.",
    uses:
      "Mixed hardwood timber; fire-adapted upland restoration; drought-tolerant shade where soils are lean.",
  },
  "black-walnut": {
    sun: "full sun",
    habitat:
      "Rich bottomlands and farm edges; scattered in Maryland forests, often near old homesteads.",
    identification:
      "Compound aromatic leaves; round green husks enclosing ridged nuts; dark deeply furrowed bark.",
    soil:
      "Deep, fertile, well-drained soils; juglone in roots limits many companion plants—plan accordingly.",
    wildlife:
      "Nuts prized by squirrels and blue jays; supports many caterpillar species for breeding birds.",
    uses:
      "Premium veneer and furniture wood; edible nuts; large shade tree for properties with space.",
  },
  "black-willow": {
    sun: "full sun",
    habitat:
      "Streambanks, ditches, and wet depressions; often leaning over water with roots stabilizing banks.",
    identification:
      "Long narrow leaves; brittle twigs; yellowish-brown furrowed bark; catkins appear with leaves in spring.",
    soil:
      "Constantly moist to wet soils; tolerates erosion-prone sites and seasonal scour.",
    wildlife:
      "Early pollen and nectar for bees; leaves feed many insects; beaver and deer browse twigs.",
    uses:
      "Bank stabilization and riparian buffers; quick shade in wet spots; short-lived but easily replaced.",
  },
  "blackjack-oak": {
    sun: "full sun",
    habitat:
      "Dry barrens, sandy ridges, and poor uplands—more common toward Maryland’s southern coastal plain and piedmont edges.",
    identification:
      "Broad, three-lobed leaves resembling a spatula; shrubby to small-tree form; dark scaly bark.",
    soil:
      "Sandy, acidic, droughty; intolerant of shade and wet feet.",
    wildlife:
      "Small acorns still used by scrubland birds and mammals; supports adapted insect communities.",
    uses:
      "Sandhill and dry prairie restoration; tough ornamental where soils are impossible for other oaks.",
  },
  "blackgum": {
    sun: "full sun",
    habitat:
      "Swamps, pocosins, and moist flats as well as drier uplands—one of the most site-flexible eastern trees.",
    identification:
      "Glossy leaves often with a few teeth near the tip; brilliant red fall color; blue-black drupes on female trees; horizontal branches.",
    soil:
      "Tolerates wet acidic soils and seasonal flooding; also grows on well-drained sites.",
    wildlife:
      "Berries are high-energy food for migrating songbirds; hollow trunks used by denning wildlife.",
    uses:
      "Ornamental for fall color; honey plant; wetland and upland wildlife food plots.",
  },
  "butternut": {
    sun: "full sun",
    habitat:
      "Scattered in rich coves and limestone-influenced soils; rare in Maryland due to butternut canker.",
    identification:
      "Elongate compound leaves; oblong nuts in sticky husks; light gray, smoothish ridged bark compared to black walnut.",
    soil:
      "Moist, deep, well-drained soils; cool root run preferred.",
    wildlife:
      "Nuts eaten by squirrels and small mammals when crops occur; supports generalist insects.",
    uses:
      "Conservation plantings with disease-screened stock; carving wood; do not confuse edible prep with toxic look-alikes.",
  },
  "canadian-serviceberry": {
    sun: "part sun",
    habitat:
      "Wet thickets, stream edges, and low woods—often earlier blooming than downy serviceberry.",
    identification:
      "White early-spring flowers in clusters; edible June berries; smooth to lightly hairy young leaves depending on form.",
    soil:
      "Moist to wet acidic soils; tolerates shade along woodland margins.",
    wildlife:
      "Berries for catbirds, robins, and mammals; flowers for early pollinators.",
    uses:
      "Naturalistic rain gardens and shrub borders; edible landscaping with multiple seasons of interest.",
  },
  "chestnut-oak": {
    sun: "full sun",
    habitat:
      "Dry rocky ridges and mountain slopes—dominant “chestnut oak” belt vegetation in parts of western Maryland.",
    identification:
      "White oak group—rounded leaf teeth without bristles; blocky dark bark; acorns large in shallow cups.",
    soil:
      "Thin, rocky, well-drained, acidic; tolerates drought and exposure.",
    wildlife:
      "Sweet acorns for bears, deer, turkeys, and small mammals; bark furrows shelter insects.",
    uses:
      "Timber and firewood; erosion control on steep slopes; iconic ridge-top canopy tree.",
  },
  "chinquapin": {
    sun: "part sun",
    habitat:
      "Dry oak-pine woods and sandy barrens; often a multi-stem shrub or small tree on poor soils.",
    identification:
      "Toothed leaves with bristle tips; spiny bur enclosing a single nut; can spread by root suckers.",
    soil:
      "Sandy, acidic, droughty; needs good drainage.",
    wildlife:
      "Nuts eaten by wildlife where chestnut blight allows crops; cover for birds in thickets.",
    uses:
      "Restoration of dry woodlands; wildlife mast where disease-resistant genetics are available.",
  },
  "cockspur-hawthorn": {
    sun: "full sun",
    habitat:
      "Old fields, pastures, and woodland edges with full sun; thorny, wide-spreading crowns.",
    identification:
      "Long thorns; white spring flowers; red haws in fall; variable leaf shapes on same tree.",
    soil:
      "Tolerates poor, compacted soils; drought-tolerant once established.",
    wildlife:
      "Haws feed birds through winter; thorny structure provides nest protection.",
    uses:
      "Farm hedgerows and wildlife barriers; ornamental with caution near walkways due to thorns.",
  },
  "common-hackberry": {
    sun: "full sun",
    habitat:
      "Floodplains, terraces, and limestone-influenced uplands; tolerant of heat and wind.",
    identification:
      "Warty, corky bark; alternate asymmetrical leaves with toothed margins; small purple drupes relished by birds.",
    soil:
      "Adaptable from moist river silts to fairly dry uplands; tolerates urban soils better than many natives.",
    wildlife:
      "Hackberry emperor and other butterflies use foliage; fruit is a bird magnet.",
    uses:
      "Tough street and park tree; quick shade; good for challenging urban heat islands.",
  },
  "common-serviceberry": {
    sun: "part sun",
    habitat:
      "Woodland edges, slopes, and openings statewide; one of the first understory trees to flower.",
    identification:
      "White racemes in early spring; oval leaves often hairy when young; striped bark on older trunks; sweet Juneberries.",
    soil:
      "Moist, well-drained, acidic to neutral forest soils; tolerates partial shade.",
    wildlife:
      "Early nectar and pollen; berries for birds and mammals; host to several butterfly larvae.",
    uses:
      "Small native ornamental; edible fruit; multi-season garden interest.",
  },
  "eastern-hemlock": {
    sun: "full shade",
    habitat:
      "Cool north-facing ravines, stream corridors, and mountain slopes—Maryland’s hemlock stands are ecologically precious.",
    identification:
      "Flat needles in two ranks; tiny pendant cones; fine-textured evergreen foliage; needles often have two white stomatal bands beneath.",
    soil:
      "Moist, cool, well-drained acidic soils; very sensitive to drought, heat, and road salt.",
    wildlife:
      "Dense cover moderates stream temperatures for trout; winter shelter for deer and birds; many specialist insects.",
    uses:
      "Shade for trout streams; ornamental where woolly adelgid can be managed; prioritize conservation genetics.",
  },
  "eastern-red-cedar": {
    sun: "full sun",
    habitat:
      "Old fields, limestone barrens, and roadsides; colonizes sunny openings before hardwoods return.",
    identification:
      "Scale-like aromatic foliage; blue “berries” are actually cones on female plants; shreddy reddish bark on trunks.",
    soil:
      "Extremely drought and alkaline tolerant; poor thin soils are fine.",
    wildlife:
      "Winter fruit for cedar waxwings and bluebirds; evergreen cover; host for juniper hairstreak butterfly.",
    uses:
      "Windbreaks, screens, and erosion control; rot-resistant fence posts; manage near apple orchards (cedar-apple rust).",
  },
  "eastern-redbud": {
    sun: "part sun",
    habitat:
      "Forest edges, rich slopes, and limestone soils; widely planted as an ornamental in Maryland.",
    identification:
      "Magenta pea-flowers on bare wood in spring; heart-shaped leaves; flat brown pods persist into winter.",
    soil:
      "Moist, well-drained soils; tolerates partial shade as an understory tree.",
    wildlife:
      "Early nectar for bees; flowers visited by specialist bees; cover when multi-stemmed.",
    uses:
      "Small ornamental tree; native alternative to many spring-flowering exotics.",
  },
  "eastern-white-pine": {
    sun: "full sun",
    habitat:
      "Formerly more widespread; today in plantations, moist cool valleys, and mixed woods—especially western Maryland.",
    identification:
      "Soft needles in bundles of five; long cylindrical cones with thick resin; tall straight trunk when open-grown.",
    soil:
      "Moist, acidic, well-drained soils; intolerant of compaction and salt spray without care.",
    wildlife:
      "Cover for birds; seeds for crossbills and small mammals; bark browsed by porcupines.",
    uses:
      "Fast softwood timber; evergreen screens; do not plant under overhead lines.",
  },
  "flowering-dogwood": {
    sun: "part sun",
    habitat:
      "Understory and edges of deciduous woods statewide; iconic in Maryland spring woodlands.",
    identification:
      "Showy white or pink bracts around tiny flower clusters; opposite leaves with curved veins; red fall foliage and berries.",
    soil:
      "Well-drained, acidic, humus-rich; avoid hot afternoon-only exposures and root disturbance.",
    wildlife:
      "Berries for migrating thrushes; spring nectar and pollen; supports many moth larvae.",
    uses:
      "Premier small ornamental; choose disease-resistant cultivars where anthracnose and powdery mildew are issues.",
  },
  "green-ash": {
    sun: "full sun",
    habitat:
      "Floodplains, swamps, and river terraces—often alongside silver maple and sycamore.",
    identification:
      "Opposite compound leaves with seven to nine stalked leaflets; gray furrowed bark; dioecious flowers before leaves.",
    soil:
      "Tolerates wet soils and periodic inundation; also succeeds on moist uplands.",
    wildlife:
      "Seeds eaten by waterfowl and songbirds; foliage supports caterpillars when trees remain healthy.",
    uses:
      "Riparian restoration—use emerald ash borer–resistant selections or diversify species as EAB persists.",
  },
  "hazel-alder": {
    sun: "full sun",
    habitat:
      "Shrubby thickets along streams, seeps, and headwater wetlands throughout much of Maryland.",
    identification:
      "Toothed leaves with fine hairs; male catkins and woody cones on same plant; often forms dense clumps.",
    soil:
      "Wet acidic soils; tolerates scouring and seasonal high water.",
    wildlife:
      "Cover for songbirds; catkins provide early pollen; fixes nitrogen improving riparian soils.",
    uses:
      "Streambank stabilization and wetland buffers; naturalistic screening in wet sun.",
  },
  "honeylocust": {
    sun: "full sun",
    habitat:
      "Native to river corridors; many landscape trees are thornless, often fruitless cultivars derived from wild stock.",
    identification:
      "Bipinnate leaves giving a delicate shade; large thorns and long pods on wild types; dark plated bark.",
    soil:
      "Tolerates drought, alkalinity, and urban soils; deep rooting when given space.",
    wildlife:
      "Wild forms provide sweet pods for livestock and wildlife; thorns protect nests in dense thickets.",
    uses:
      "Street tree where cultivars match site; native genotype for floodplain restoration.",
  },
  "loblolly-pine": {
    sun: "full sun",
    habitat:
      "Coastal plain pine woods, old fields, and plantations—Maryland’s common lowland pine.",
    identification:
      "Needles in bundles of three; large cones with sharp prickles; rapid height growth in youth.",
    soil:
      "Moist to dry acidic sands and loams; tolerates poor fertility after establishment.",
    wildlife:
      "Pine seeds for birds and small mammals; open understories can host quail and pollinators in herb layer.",
    uses:
      "Timber and pulp; fast screens; stormwater uptake on sandy sites.",
  },
  "mockernut-hickory": {
    sun: "full sun",
    habitat:
      "Dry to moist upland mixed forests; one of the common hickories on Maryland slopes.",
    identification:
      "Seven to nine leaflets with tufts of hair on rachis and leaf undersides; thick-husked nuts with tiny sweet kernel—hard to crack.",
    soil:
      "Well-drained, deep loam over rock; tolerates slopes.",
    wildlife:
      "Mast for squirrels and chipmunks; high-fat nuts important before winter.",
    uses:
      "Strong timber for tools and flooring; long-lived shade for large properties.",
  },
  "northern-red-oak": {
    sun: "full sun",
    habitat:
      "One of the most common canopy oaks in Maryland upland forests and suburban lots.",
    identification:
      "Red oak group—bristle-tipped lobes; bark with smooth stripes on upper trunk, rough below; acorns squat with shallow cup.",
    soil:
      "Well-drained, acidic to slightly alkaline; tolerates clay if not waterlogged.",
    wildlife:
      "Acorns are staple fall food; cavities common in older trees.",
    uses:
      "Valuable timber; reliable large shade tree; good for reforesting sunny old fields.",
  },
  "overcup-oak": {
    sun: "part sun",
    habitat:
      "Seasonally flooded bottomlands and coastal plain swamps; acorns often nearly enclosed by the cup.",
    identification:
      "White oak group leaves with irregular lobes; acorn cup wraps much of the nut; broad rounded crown in openings.",
    soil:
      "Heavy, wet, acidic soils; tolerates long hydroperiods once established.",
    wildlife:
      "Acorns float and may disperse in floods; waterfowl and swamp wildlife use flooded forests.",
    uses:
      "Wetland restoration and wildlife forests; shade only on appropriate wet sites.",
  },
  "pawpaw": {
    sun: "full shade",
    habitat:
      "Rich alluvial bottoms and shady slopes; forms clonal thickets under taller hardwoods.",
    identification:
      "Large tropical-looking leaves; purple-brown spring flowers; banana-custard flavored fruits on patch-forming clones.",
    soil:
      "Moist, fertile, well-drained loam; needs shade when young for best fruiting in hot climates.",
    wildlife:
      "Fruit feeds mammals and box turtles; sole host for zebra swallowtail butterfly larvae.",
    uses:
      "Edible native fruit orchard under shade cloth or high canopy; ornamental foliage.",
  },
  "persimmon": {
    sun: "full sun",
    habitat:
      "Old fields, woodland edges, and sandy roadsides; more common toward the warmer parts of Maryland.",
    identification:
      "Blocky dark bark resembling alligator hide; oval leaves; dioecious—females bear orange sweet fruit when ripe.",
    soil:
      "Tolerates poor, dry soils; taproot makes transplanting tricky—start small.",
    wildlife:
      "Fruit critical for mammals and many birds after frost; supports silk moth larvae.",
    uses:
      "Edible fruit for people and wildlife; tough urban survivor; beautiful bark interest.",
  },
  "pignut-hickory": {
    sun: "full sun",
    habitat:
      "Dry ridges and oak-hickory forests; common associate on Maryland uplands.",
    identification:
      "Five (sometimes seven) leaflets; small pear-shaped nuts with thin husk that splits partly; tight bark plates.",
    soil:
      "Well-drained, acidic, often droughty; tolerates low-nutrient slopes.",
    wildlife:
      "Nuts cached by rodents; supports many insects for woodpeckers and warblers.",
    uses:
      "Excellent firewood and tool handles; drought-tolerant canopy for dry sites.",
  },
  "pin-oak": {
    sun: "full sun",
    habitat:
      "Natural in poorly drained flats; widely planted in lawns—needs acidic soil to avoid chlorosis.",
    identification:
      "Lower branches droop, middle horizontal, upper upright (“pin” silhouette); deeply lobed leaves with bristle tips; small acorns.",
    soil:
      "Moist, acidic, heavy soils; iron chlorosis on high-pH sites without treatment.",
    wildlife:
      "Acorns in wet years; structure used by cavity nesters over time.",
    uses:
      "Street and lawn tree where pH is managed; wetland mitigation plantings.",
  },
  "post-oak": {
    sun: "full sun",
    habitat:
      "Dry ridges, barrens, and sandy pine-oak woods—southern piedmont and coastal plain edge in Maryland.",
    identification:
      "Cross-shaped or three-lobed leathery leaves; dense rounded crown; blocky bark.",
    soil:
      "Droughty, sandy or rocky acidic soils; fire-adapted ecosystems.",
    wildlife:
      "Small acorns for scrubland wildlife; supports xeric forest insects.",
    uses:
      "Restoration of dry oak-pine communities; compact shade where drainage is sharp.",
  },
  "pumpkin-ash": {
    sun: "full sun",
    habitat:
      "Deep swamps and river bottoms on the coastal plain—often with buttressed trunks in standing water.",
    identification:
      "Large compound leaves with thick stalks; swollen trunk base in flooded sites; similar to other ashes when young.",
    soil:
      "Saturated acidic mucks; not for dry upland plantings.",
    wildlife:
      "Wetland structure for herons, wood ducks, and amphibians; seeds used when produced.",
    uses:
      "Wetland forest restoration; prioritize EAB-resistant planning—species is highly vulnerable.",
  },
  "red-maple": {
    sun: "full sun",
    habitat:
      "Swamps to dry slopes—one of Maryland’s most widespread trees due to plasticity and disturbance response.",
    identification:
      "Opposite leaves with three to five lobes and red petioles; early red flowers in late winter; samaras in spring.",
    soil:
      "Wet to moist preferred but tolerates droughty sand once established; pH flexible compared to some maples.",
    wildlife:
      "Early nectar for bees; seeds for birds; hollows in old trees for wildlife.",
    uses:
      "Fast shade; wet-site stabilization; brilliant fall color selections in trade.",
  },
  "red-mulberry": {
    sun: "part sun",
    habitat:
      "Rich woods, fencerows, and floodplain edges; less aggressive than invasive white mulberry where both occur.",
    identification:
      "Variable leaves from unlobed to mitten-shaped; dark juicy berries staining fingers; rough bark.",
    soil:
      "Moist, fertile soils; tolerates partial shade and urban edges.",
    wildlife:
      "Berries feed dozens of bird species; foliage hosts silkworm relatives and other insects.",
    uses:
      "Edible landscaping; bird gardens; prefer native over exotic mulberries when planting.",
  },
  "river-birch": {
    sun: "full sun",
    habitat:
      "Streambanks and floodplains; planted widely for exfoliating bark in residential landscapes.",
    identification:
      "Shaggy peeling salmon-cream bark; triangular toothed leaves; drooping male catins and upright female catkins.",
    soil:
      "Moist acidic soils; tolerates brief inundation; chlorosis possible on high pH without care.",
    wildlife:
      "Seeds for finches; catkins for early-season insects; cover along waterways.",
    uses:
      "Multi-trunk specimens for rain gardens; native alternative to some riverbank willows where scale is managed.",
  },
  "sand-hickory": {
    sun: "full sun",
    habitat:
      "Sandy coastal plain ridges and dry oak-pine woods; localized in warmer parts of Maryland.",
    identification:
      "Seven to nine narrow leaflets; small nuts; bark tight compared to shagbark.",
    soil:
      "Deep sand, acidic, droughty; intolerant of wet clay.",
    wildlife:
      "Mast for rodents; part of pine barrens food webs.",
    uses:
      "Restoration on deep sand; drought-tolerant shade where hardy.",
  },
  "scarlet-oak": {
    sun: "full sun",
    habitat:
      "Dry slopes and barrens with poor soils; brilliant red fall color where summers are warm enough.",
    identification:
      "Red oak group with deeply cut lobes and bristle tips; dark bark; acorns broad with saucer-like cup.",
    soil:
      "Well-drained, acidic, infertile; tolerates rocky outcrops.",
    wildlife:
      "Acorns for jays and deer; open crowns allow understory plants for pollinators.",
    uses:
      "Reclamation of dry cuts; ornamental fall color on suitable sites.",
  },
  "shagbark-hickory": {
    sun: "full sun",
    habitat:
      "Rich coves and mixed hardwood slopes; iconic shaggy bark visible at a distance.",
    identification:
      "Five large leaflets; long plates of peeling bark; sweet nuts prized for baking and wildlife.",
    soil:
      "Deep, moist, well-drained loam; long taproot—plant young.",
    wildlife:
      "High-energy nuts; bark plates shelter bats when loose; many caterpillar species.",
    uses:
      "Edible nuts; premium wood for smoking meats; stately park tree.",
  },
  "silver-maple": {
    sun: "full sun",
    habitat:
      "Floodplains and river bottoms; fast colonizer of disturbed wet ground.",
    identification:
      "Deeply five-lobed leaves silvery beneath; large soft wood; winged samaras spin to earth in spring.",
    soil:
      "Tolerates wet, heavy soils and occasional inundation; surface roots common—keep away from pavement.",
    wildlife:
      "Early spring flowers for bees; cavities in old trees for raccoons and owls.",
    uses:
      "Quick riparian cover; not ideal near buildings due to limb breakage—prune for structure.",
  },
  "slippery-elm": {
    sun: "part sun",
    habitat:
      "Rich slopes and stream terraces; less common than American elm in many areas today.",
    identification:
      "Sandpapery upper leaf surface; asymmetrical base; mucilaginous inner bark historically used as demulcent.",
    soil:
      "Moist, fertile, well-drained to periodically wet soils.",
    wildlife:
      "Seeds and buds for birds; host for mourning cloak and other butterflies.",
    uses:
      "Restoration plantings; inner bark has documented traditional uses—consult reliable sources.",
  },
  "smooth-sumac": {
    sun: "full sun",
    habitat:
      "Old fields, roadsides, and dry banks; spreads by root suckers into colonies.",
    identification:
      "Pinnately compound leaves without fuzzy stems; large upright red fruit clusters persisting into winter.",
    soil:
      "Dry to mesic, poor soils welcome; highly drought tolerant.",
    wildlife:
      "Winter food for birds when little else remains; cover in dense clones.",
    uses:
      "Slope stabilization; native hedge; dramatic fall color.",
  },
  "sourwood": {
    sun: "part sun",
    habitat:
      "Acidic woodland slopes and edges—often leaning from understory toward light gaps.",
    identification:
      "Drooping clusters of white lily-of-the-valley-like flowers; sour-tasting leaves; brilliant red fall foliage.",
    soil:
      "Moist, acidic, well-drained; intolerant of high pH and compaction.",
    wildlife:
      "Exceptional late-summer nectar for bees (sourwood honey); seeds for birds.",
    uses:
      "Ornamental for acid gardens; keep as specimen where soil suits.",
  },
  "southern-red-oak": {
    sun: "full sun",
    habitat:
      "Dry coastal plain and piedmont uplands; common in warmer Maryland counties.",
    identification:
      "Variable lobed leaves often with bell-shaped base and bristle tips; acorns small with knobby cups.",
    soil:
      "Sandy to clay uplands if well drained; drought tolerant.",
    wildlife:
      "Acorns for deer and turkeys; bark texture supports lichens and insects.",
    uses:
      "Timber and wildlife forestry; heat-tolerant oak for sunny lawns.",
  },
  "staghorn-sumac": {
    sun: "full sun",
    habitat:
      "Roadsides, clearings, and rocky slopes; fuzzy young stems like stag horns.",
    identification:
      "Velvety twigs; pinnate leaves; dense pyramidal red fruit clusters at stem tips.",
    soil:
      "Any well-drained soil; thrives on neglect.",
    wildlife:
      "Winter finches and others eat seeds; quick cover after disturbance.",
    uses:
      "Erosion control on cuts; naturalistic colonies—give room to spread.",
  },
  "sugar-maple": {
    sun: "part sun",
    habitat:
      "Cool northern slopes and rich coves—common in western Maryland hardwood forests.",
    identification:
      "Five-lobed leaves with few teeth; brilliant fall color; paired winged samaras; smooth gray bark when young becoming platy.",
    soil:
      "Moist, well-drained, neutral to slightly acidic loam; sensitive to road salt and compaction.",
    wildlife:
      "Seeds for small mammals; spring sap for insects and syrup for people; cavity trees later.",
    uses:
      "Shade and syrup production; high-value timber; avoid hot dry urban islands without irrigation.",
  },
  "sweetbay": {
    sun: "part sun",
    habitat:
      "Acidic wetlands and bay forests on the coastal plain; evergreen to semi-evergreen toward the south.",
    identification:
      "Aromatic leaves white beneath; creamy cupped flowers in late spring to summer; multi-stem habit common.",
    soil:
      "Moist to wet acidic soils; tolerates some shade in swamp edges.",
    wildlife:
      "Beetles and bees pollinate flowers; seeds used by songbirds.",
    uses:
      "Native ornamental for rain gardens; evergreen interest in milder microclimates.",
  },
  "sweetgum": {
    sun: "full sun",
    habitat:
      "Moist to wet lowlands and old fields; abundant in Maryland’s coastal plain pine-hardwood mixes.",
    identification:
      "Star-shaped leaves and woody “gumball” capsules; tall straight trunk in forest; corky wings on twigs of some forms.",
    soil:
      "Moist acidic soils; tolerates clay if not permanently saturated.",
    wildlife:
      "Finches eat seeds from spiny balls; supports many moth species.",
    uses:
      "Timber and plywood; fast shade; fruitless cultivars reduce litter in yards.",
  },
  "swamp-chestnut-oak": {
    sun: "full sun",
    habitat:
      "Bottomlands and rich hammocks—large white oak group species of southeastern floodplains reaching Maryland’s warmer counties.",
    identification:
      "Large oblong leaves with rounded teeth; acorns large in shallow cups; tight gray bark on mature trunks.",
    soil:
      "Deep, moist alluvial soils; tolerates seasonal high water tables.",
    wildlife:
      "Large sweet acorns for deer, turkeys, and rodents; important mast in wet hardwood forests.",
    uses:
      "Bottomland timber; wildlife food plots in seasonally wet sites.",
  },
  "swamp-white-oak": {
    sun: "full sun",
    habitat:
      "Floodplains and wet terraces; also tolerates moist uplands—popular for urban tough sites when soil is acidic.",
    identification:
      "White oak group with rounded lobes; undersides of leaves often fuzzy; acorns on long stalks.",
    soil:
      "Moist to wet, poorly drained phases OK; avoid high pH without intervention.",
    wildlife:
      "Acorns sprout in fall—important for germination-dependent wildlife cycles; cavities later.",
    uses:
      "Street tree selections available; wetland mitigation; wildlife oak plantings.",
  },
  "sassafras": {
    sun: "part sun",
    habitat:
      "Old fields, edges, and sandy pine woods; root-suckering thickets common.",
    identification:
      "Three leaf forms on one tree—unlobed, mitten, and three-lobed; aromatic bark and leaves; dark blue berries on female plants.",
    soil:
      "Well-drained, acidic, often sandy; tolerates poor fertility.",
    wildlife:
      "Berries for birds; host for spicebush swallowtail; early spring flowers for pollinators.",
    uses:
      "Pioneer restoration; ornamental fall color; historical culinary use of parts is unsafe—do not self-medicate.",
  },
  "tulip-poplar": {
    sun: "full sun",
    habitat:
      "Rich coves and mesic slopes—one of the tallest eastern hardwoods and common in Maryland forests.",
    identification:
      "Unique tulip-shaped summer flowers with orange and green; leaves four-lobed like silhouettes; tall straight column in youth.",
    soil:
      "Deep, moist, well-drained, slightly acidic soils; needs vertical space.",
    wildlife:
      "Nectar for ruby-throated hummingbirds and bees; soft wood develops cavities quickly for wildlife.",
    uses:
      "Fast shade and timber; magnificent lawn specimen if given room.",
  },
  "virginia-pine": {
    sun: "full sun",
    habitat:
      "Old fields and dry ridges; scrappy pioneer pine before hardwood succession.",
    identification:
      "Twisted paired needles; small cones; often irregular crown when open-grown.",
    soil:
      "Poor, acidic, well-drained; tolerates drought and rocky sites.",
    wildlife:
      "Cover for early-succession birds; seeds for small mammals.",
    uses:
      "Reclamation and Christmas trees; transition plantings toward oak-pine restoration.",
  },
  "white-ash": {
    sun: "full sun",
    habitat:
      "Rich moist slopes and mixed forests; populations devastated by emerald ash borer—plant only as part of diverse mixes.",
    identification:
      "Opposite compound leaves with five to nine stalkless leaflets; diamond-patterned bark on mature trees; paddle-shaped samaras.",
    soil:
      "Moist, fertile, well-drained loam; tolerates seasonal moisture.",
    wildlife:
      "Seeds eaten by many birds; bark hosts sapsuckers; EAB has collapsed many populations.",
    uses:
      "Tool handles and baseball bats historically; prioritize EAB-tolerant selections or substitute species in new plantings.",
  },
  "white-fringetree": {
    sun: "part sun",
    habitat:
      "Stream bluffs, limestone glades, and moist woods edges in warmer Maryland counties.",
    identification:
      "Drooping clusters of narrow white petals in late spring; dark blue fruits on female trees; opposite simple leaves.",
    soil:
      "Moist, well-drained, neutral to slightly alkaline tolerated; appreciates organic mulch.",
    wildlife:
      "Flowers attract pollinators; fruits for birds; also emerald ash borer host—monitor health.",
    uses:
      "Small specimen tree for fragrant spring display; good under power lines relative to large trees.",
  },
  "white-oak": {
    sun: "full sun",
    habitat:
      "Maryland’s state tree—upland forests, parks, and well-drained neighborhoods statewide.",
    identification:
      "Rounded leaf lobes without bristle tips; light gray scaly plates on bark; acorns sweet enough to eat raw when ripe.",
    soil:
      "Deep, well-drained, mildly acidic to neutral; intolerant of compacted high-pH islands without soil remediation.",
    wildlife:
      "Acorns are a keystone food; many insects on foliage feed nestling songbirds; long-lived cavity trees.",
    uses:
      "Premier wildlife and timber oak; legacy shade tree—plan for centuries-scale longevity.",
  },
  "willow-oak": {
    sun: "full sun",
    habitat:
      "Lowland forests and river terraces on the coastal plain; widely planted as a street tree in the Mid-Atlantic.",
    identification:
      "Willow-like entire leaves; red oak group acorns small and saucer-cupped; tall oval crown.",
    soil:
      "Moist acidic soils; tolerates some compaction when irrigated during establishment.",
    wildlife:
      "Small acorns produced in quantity in good years; shade for urban birds.",
    uses:
      "Large lawn and avenue tree; wetland edges; pair with soil volume for root health.",
  },
  "winged-sumac": {
    sun: "full sun",
    habitat:
      "Dry barrens, roadsides, and open oak-pine woods; spreads colonially.",
    identification:
      "Wings along leaf rachis; shiny compound leaves; dense red fruit clusters flat-topped.",
    soil:
      "Dry, sandy, acidic; thrives where turf struggles.",
    wildlife:
      "Important winter bird food; quick cover after fire or clearing.",
    uses:
      "Slope stabilization; native mass planting for fall color.",
  },
  "yellow-buckeye": {
    sun: "part sun",
    habitat:
      "Cove hardwoods and rich mountain slopes—Maryland’s native large buckeye in cooler counties.",
    identification:
      "Palmately compound leaves with five leaflets; yellow flower panicles; smooth chestnut-like capsules—seeds toxic if eaten raw.",
    soil:
      "Deep, moist, well-drained, fertile; intolerant of drought and salt.",
    wildlife:
      "Hummingbirds visit flowers; nuts used sparingly by rodents when accessible.",
    uses:
      "Shade for large acidic lawns; spectacular flowers—keep fallen fruit away from pets and children.",
  },
};
