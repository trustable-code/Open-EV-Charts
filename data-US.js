// Data sets for car sales in the United States

"use strict";

db.addCountry("US", "United States");

db.insert(db.countries.US, "2018-01", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/02/u-s-auto-sales-brand-rankings-january-2018-ytd/",
{ "Ford": 154001
, "Toyota": 149142
, "Chevrolet": 141947
, "Nissan": 112903
, "Honda": 95634
, "Jeep": 59703
, "Subaru": 44357
, "Hyundai": 39629
, "Kia": 35628
, "GMC": 33058
, "Ram": 32039
, "Dodge": 27600
, "Mercedes-Benz": 27498
, "Mazda": 24962
, "Volkswagen": 24744
, "BMW": 19016
, "Lexus": 17914
, "Audi": 14511
, "Buick": 13648
, "Infiniti": 10635
, "Chrysler": 10584
, "Cadillac": 9895
, "Acura": 8908
, "Mitsubishi": 8480
, "Land Rover": 6446
, "Lincoln": 6410
, "Tesla": 3375
, "Volvo": 5567
, "Porsche": 4816
, "Mini": 2937
, "Jaguar": 2604
, "Alfa Romeo": 1648
, "Genesis": 1613
, "Fiat": 1229
, "Maserati": 966
, "Smart": 105
, "other": 157
});

db.insert(db.countries.US, "2018-01", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 1875
, "Tesla|Model S": 800
, "Tesla|Model X": 700
, "Chevrolet|Bolt EV": 1177
, "Nissan|Leaf": 150
, "Kia|Soul EV": 115
, "Honda|Clarity BEV": 203
, "Volkswagen|e-Golf": 178
, "Ford|Focus Electric": 70
, "Hyundai|Ioniq Electric": 49
});

db.insert(db.countries.US, "2018-02", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/02/u-s-auto-sales-brand-rankings-february-2018-ytd/",
{ "Ford": 186662
, "Toyota": 162930
, "Chevrolet": 149605
, "Nissan": 117110
, "Honda": 104588
, "Jeep": 70020
, "Subaru": 47249
, "Hyundai": 44732
, "Kia": 40672
, "GMC": 42640
, "Ram": 36737
, "Dodge": 40187
, "Volkswagen": 26660
, "Mazda": 25731
, "Mercedes-Benz": 24760
, "BMW": 23508
, "Lexus": 19264
, "Buick": 16322
, "Audi": 15451
, "Chrysler": 16150
, "Infiniti": 12820
, "Cadillac": 12338
, "Mitsubishi": 12973
, "Acura": 10969
, "Land Rover": 6828
, "Lincoln": 6700
, "Tesla": 4585
, "Volvo": 6283
, "Porsche": 4382
, "Mini": 3065
, "Jaguar": 2185
, "Alfa Romeo": 1568
, "Genesis": 1363
, "Fiat": 1241
, "Maserati": 931
, "Smart": 106
, "other": 165
});

db.insert(db.countries.US, "2018-02", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 2485
, "Tesla|Model S": 1125
, "Tesla|Model X": 975
, "Chevrolet|Bolt EV": 1424
, "Nissan|Leaf": 895
, "Fiat|500e": 235
, "Kia|Soul EV": 163
, "Honda|Clarity BEV": 104
, "Volkswagen|e-Golf": 198
, "Ford|Focus Electric": 73
, "Hyundai|Ioniq Electric": 3
});

db.insert(db.countries.US, "2018-03", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/04/u-s-auto-sales-brand-rankings-march-2018-ytd/",
{ "Ford": 233669
, "Toyota": 195750
, "Chevrolet": 199367
, "Nissan": 145103
, "Honda": 128855
, "Jeep": 98382
, "Subaru": 58097
, "Hyundai": 60154
, "GMC": 55646
, "Kia": 50645
, "Dodge": 49184
, "Ram": 44878
, "Mazda": 33302
, "Volkswagen": 32548
, "Mercedes-Benz": 28407
, "BMW": 31311
, "Lexus": 27032
, "Buick": 26834
, "Audi": 20090
, "Chrysler": 19499
, "Infiniti": 17432
, "Cadillac": 14494
, "Mitsubishi": 14319
, "Acura": 13537
, "Land Rover": 10972
, "Lincoln": 9352
, "Volvo": 8233
, "Tesla": 10020
, "Porsche": 4756
, "Mini": 4531
, "Jaguar": 3260
, "Alfa Romeo": 2576
, "Genesis": 1386
, "Fiat": 1544
, "Maserati": 885
, "Smart": 110
, "other": 165
});

db.insert(db.countries.US, "2018-03", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 3820
, "Tesla|Model S": 3375
, "Tesla|Model X": 2825
, "Chevrolet|Bolt EV": 1774
, "Nissan|Leaf": 1500
, "Fiat|500e": 285
, "Kia|Soul EV": 157
, "Honda|Clarity BEV": 48
, "Volkswagen|e-Golf": 164
, "Ford|Focus Electric": 137
, "Hyundai|Ioniq Electric": 60
});

db.insert(db.countries.US, "2018-04", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/05/u-s-auto-sales-brand-rankings-april-2018-ytd/",
{ "Ford": 195338
, "Toyota": 170706
, "Nissan": 78804
, "Honda": 113813
, "Jeep": 82641
, "Subaru": 53170
, "Hyundai": 55035
, "Kia": 50585
, "Dodge": 40994
, "Ram": 43074
, "Mercedes-Benz": 30522
, "Volkswagen": 28794
, "Mazda": 23056
, "BMW": 23482
, "Lexus": 21642
, "Audi": 19104
, "Chrysler": 14189
, "Infiniti": 8960
, "Acura": 11888
, "Mitsubishi": 7990
, "Lincoln": 8518
, "Land Rover": 6448
, "Volvo": 8333
, "Tesla": 6025
, "Porsche": 5570
, "Mini": 3731
, "Jaguar": 2019
, "Alfa Romeo": 1847
, "Fiat": 1404
, "Genesis": 1028
, "Maserati": 950
, "Smart": 93
, "other": 165
});

db.insert(db.countries.US, "2018-04", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 3750
, "Tesla|Model S": 1250
, "Tesla|Model X": 1025
, "Chevrolet|Bolt EV": 1275
, "Nissan|Leaf": 1171
, "Fiat|500e": 215
, "Kia|Soul EV": 152
, "Honda|Clarity BEV": 52
, "Volkswagen|e-Golf": 128
, "Ford|Focus Electric": 83
, "Hyundai|Ioniq Electric": 7
});

db.insert(db.countries.US, "2018-05", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/06/u-s-auto-sales-brand-rankings-may-2018-ytd/",
{ "Ford": 231772
, "Toyota": 189930
, "Honda": 140250
, "Nissan": 120207
, "Jeep": 97287
, "Hyundai": 64980
, "Subaru": 60146
, "Kia": 59462
, "Ram": 51884
, "Dodge": 46581
, "Mercedes-Benz": 30077
, "Volkswagen": 31211
, "Mazda": 29980
, "BMW": 26662
, "Lexus": 25391
, "Audi": 19315
, "Chrysler": 14724
, "Infiniti": 11625
, "Acura": 12819
, "Mitsubishi": 12416
, "Lincoln": 9755
, "Land Rover": 7103
, "Volvo": 9338
, "Tesla": 8970
, "Porsche": 5005
, "Mini": 4226
, "Jaguar": 2366
, "Alfa Romeo": 2377
, "Fiat": 1441
, "Genesis": 1076
, "Maserati": 950
, "Smart": 110
, "other": 165
});

db.insert(db.countries.US, "2018-05", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 6000
, "Tesla|Model S": 1520
, "Tesla|Model X": 1450
, "Chevrolet|Bolt EV": 1125
, "Nissan|Leaf": 1576
, "Fiat|500e": 250
, "Kia|Soul EV": 133
, "Honda|Clarity BEV": 37
, "Volkswagen|e-Golf": 76
, "Ford|Focus Electric": 88
, "Hyundai|Ioniq Electric": 32
});

db.insert(db.countries.US, "2018-06", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/07/u-s-auto-sales-brand-rankings-june-2018-ytd/",
{ "Acura": 14532
, "Alfa Romeo": 2249
, "Audi": 19471
, "BMW": 29404
, "Buick": 17590
, "Cadillac": 13073
, "Chevrolet": 175421
, "Chrysler": 13484
, "Dodge": 46387
, "Fiat": 1426
, "Ford": 220003
, "Genesis": 796
, "GMC": 46055
, "Honda": 132031
, "Hyundai": 63256
, "Infiniti": 10698
, "Jaguar": 2353
, "Jeep": 86989
, "Kia": 56571
, "Land Rover": 6982
, "Lexus": 23750
, "Lincoln": 9534
, "Mazda": 26893
, "Mercedes-Benz": 28999
, "Mini": 4146
, "Mitsubishi": 11149
, "Nissan": 134398
, "Porsche": 4892
, "Ram": 51729
, "Smart": 126
, "Subaru": 59841
, "Tesla": 11202
, "Toyota": 185851
, "Volkswagen": 28941
, "Volvo": 9868
});

db.insert(db.countries.US, "2018-06", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 5902
, "Tesla|Model S": 2750
, "Tesla|Model X": 2550
, "Chevrolet|Bolt EV": 1083
, "Nissan|Leaf": 1367
, "Fiat|500e": 225
, "Kia|Soul EV": 57
, "Honda|Clarity BEV": 126
, "Volkswagen|e-Golf": 32
, "Ford|Focus Electric": 50
, "Hyundai|Ioniq Electric": 47
});

db.insert(db.countries.US, "2018-07", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/08/u-s-auto-sales-brand-rankings-july-2018-ytd/",
{ "Acura": 13247
, "Alfa Romeo": 2016
, "Audi": 19221
, "BMW": 21982
, "Buick": 14497
, "Cadillac": 11708
, "Chevrolet": 152804
, "Chrysler": 11624
, "Dodge": 31119
, "Fiat": 1240
, "Ford": 184845
, "Genesis": 615
, "GMC": 39921
, "Honda": 125355
, "Hyundai": 51137
, "Infiniti": 9747
, "Jaguar": 1880
, "Jeep": 79906
, "Kia": 53112
, "Land Rover": 6209
, "Lexus": 25403
, "Lincoln": 7898
, "Mazda": 24125
, "Mercedes-Benz": 22955
, "Mini": 4296
, "Mitsubishi": 9950
, "Nissan": 99045
, "Porsche": 4020
, "Ram": 45065
, "Smart": 103
, "Subaru": 59426
, "Tesla": 16775
, "Toyota": 183367
, "Volkswagen": 30520
, "Volvo": 8622
});

db.insert(db.countries.US, "2018-07", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 14250
, "Tesla|Model S": 1200
, "Tesla|Model X": 1325
, "Chevrolet|Bolt EV": 1175
, "Nissan|Leaf": 1149
, "Fiat|500e": 220
, "Kia|Soul EV": 130
, "Honda|Clarity BEV": 120
, "Volkswagen|e-Golf": 18
, "Ford|Focus Electric": 46
, "Hyundai|Ioniq Electric": 35
});

db.insert(db.countries.US, "2018-08", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/09/u-s-auto-sales-brand-rankings-august-2018-ytd/",
{ "Ford": 208755
, "Toyota": 194433
, "Chevrolet": 171902
, "Honda": 132834
, "Nissan": 101580
, "Jeep": 87502
, "Subaru": 64088
, "Hyundai": 56929
, "Kia": 53864
, "Ram": 54808
, "GMC": 44912
, "Dodge": 35575
, "Volkswagen": 32255
, "Mercedes-Benz": 24084
, "Mazda": 25816
, "BMW": 23789
, "Lexus": 28622
, "Audi": 20907
, "Buick": 16309
, "Chrysler": 12219
, "Acura": 15072
, "Cadillac": 13173
, "Infiniti": 10796
, "Tesla": 23175
, "Mitsubishi": 8416
, "Lincoln": 8945
, "Volvo": 8970
, "Land Rover": 7179
, "Porsche": 4083
, "Mini": 3800
, "Jaguar": 2469
, "Alfa Romeo": 2240
, "Fiat": 1374
, "Genesis": 613
, "Smart": 108
});

db.insert(db.countries.US, "2018-08", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 17800
, "Tesla|Model S": 2625
, "Tesla|Model X": 2750
, "Chevrolet|Bolt EV": 1225
, "Nissan|Leaf": 1315
, "Fiat|500e": 75
, "Kia|Soul EV": 33
, "Honda|Clarity BEV": 75
, "Volkswagen|e-Golf": 32
, "Ford|Focus Electric": 7
, "Hyundai|Ioniq Electric": 21
});

db.insert(db.countries.US, "2018-09", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/10/u-s-auto-sales-brand-rankings-september-2018-ytd/",
{ "Ford": 188328
, "Toyota": 178501
, "Chevrolet": 159171
, "Honda": 119157
, "Nissan": 110283
, "Jeep": 83764
, "Subaru": 57044
, "Hyundai": 56940
, "Kia": 51503
, "Ram": 56447
, "GMC": 41584
, "Dodge": 42101
, "Volkswagen": 30555
, "Mercedes-Benz": 30617
, "Mazda": 21257
, "BMW": 25908
, "Lexus": 24597
, "Audi": 19350
, "Buick": 15101
, "Chrysler": 14683
, "Tesla": 29975
, "Acura": 13511
, "Cadillac": 12409
, "Infiniti": 12536
, "Mitsubishi": 7705
, "Lincoln": 8168
, "Volvo": 8715
, "Land Rover": 6966
, "Porsche": 5102
, "Mini": 3461
, "Jaguar": 2040
, "Alfa Romeo": 1639
, "Fiat": 1185
, "Genesis": 419
, "Smart": 98
});

db.insert(db.countries.US, "2018-09", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 22250
, "Tesla|Model S": 3750
, "Tesla|Model X": 3975
, "Chevrolet|Bolt EV": 1549
, "Nissan|Leaf": 1563
, "Fiat|500e": 94
, "Kia|Soul EV": 18
, "Honda|Clarity BEV": 122
, "Volkswagen|e-Golf": 14
, "Ford|Focus Electric": 4
, "Hyundai|Ioniq Electric": 12
});

db.insert(db.countries.US, "2018-10", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/11/u-s-auto-sales-brand-rankings-october-2018-ytd/",
{ "Ford": 184108
, "Toyota": 168385
, "Chevrolet": 179185
, "Honda": 108558
, "Nissan": 98082
, "Jeep": 72800
, "Subaru": 55394
, "Hyundai": 64146
, "Kia": 45102
, "Ram": 54542
, "GMC": 54203
, "Dodge": 33872
, "Volkswagen": 29000
, "Mercedes-Benz": 29474
, "Mazda": 18673
, "BMW": 23262
, "Lexus": 22716
, "Audi": 16056
, "Buick": 17797
, "Chrysler": 13289
, "Tesla": 20325
, "Acura": 13624
, "Cadillac": 14001
, "Infiniti": 11880
, "Mitsubishi": 8002
, "Lincoln": 7574
, "Volvo": 7627
, "Land Rover": 7846
, "Porsche": 4817
, "Mini": 3166
, "Jaguar": 2648
, "Alfa Romeo": 1737
, "Fiat": 1151
, "Smart": 95
});

db.insert(db.countries.US, "2018-10", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/october-2018-plug-in-electric-vehicle-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 17750
, "Tesla|Model S": 1350
, "Tesla|Model X": 1225
, "Chevrolet|Bolt EV": 2075
, "Nissan|Leaf": 1234
, "Fiat|500e": 100
, "Kia|Soul EV": 61
, "Honda|Clarity BEV": 116
, "Volkswagen|e-Golf": 62
, "Hyundai|Ioniq Electric": 21
, "Jaguar|I-Pace": 5
});

db.insert(db.countries.US, "2018-11", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2018/12/u-s-auto-sales-brand-rankings-november-2018-ytd/",
{ "Ford": 186048
, "Toyota": 163977
, "Chevrolet": 172293
, "Honda": 106481
, "Nissan": 96427
, "Jeep": 73784
, "Subaru": 56782
, "Hyundai": 57083
, "Kia": 45101
, "Ram": 57970
, "GMC": 52119
, "Dodge": 33196
, "Volkswagen": 26789
, "Mercedes-Benz": 32879
, "BMW": 28330
, "Mazda": 20660
, "Lexus": 26446
, "Audi": 17082
, "Buick": 16640
, "Tesla": 24600
, "Chrysler": 13094
, "Acura": 14053
, "Cadillac": 13463
, "Infiniti": 14086
, "Mitsubishi": 7688
, "Lincoln": 9207
, "Volvo": 8181
, "Land Rover": 8547
, "Porsche": 5673
, "Mini": 3528
, "Jaguar": 3197
, "Alfa Romeo": 1957
, "Fiat": 1309
, "Genesis": 417
, "Smart": 100
});

db.insert(db.countries.US, "2018-11", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/november-2018-u-s-plug-in-ev-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 18650
, "Tesla|Model S": 2750
, "Tesla|Model X": 3200
, "Chevrolet|Bolt EV": 2825
, "Nissan|Leaf": 1128
, "Fiat|500e": 148
, "Volkswagen|e-Golf": 230
, "Kia|Soul EV": 61
, "Honda|Clarity BEV": 37
, "Ford|Focus Electric": 1
, "Hyundai|Ioniq Electric": 34
, "Jaguar|I-Pace": 165
});

db.insert(db.countries.US, "2018-12", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/01/u-s-auto-sales-brand-rankings-december-2018-ytd/",
{ "Ford": 208106
, "Toyota": 185384
, "Chevrolet": 179212
, "Honda": 138341
, "Nissan": 130655
, "Jeep": 80449
, "Subaru": 64541
, "Hyundai": 65107
, "Ram": 68195
, "Kia": 47428
, "GMC": 54203
, "Dodge": 32528
, "Volkswagen": 32047
, "Mercedes-Benz": 36132
, "BMW": 34357
, "Mazda": 25870
, "Lexus": 35524
, "Audi": 22765
, "Buick": 17305
, "Tesla": 32600
, "Chrysler": 12425
, "Acura": 16774
, "Cadillac": 14001
, "Infiniti": 18065
, "Mitsubishi": 8986
, "Lincoln": 11526
, "Volvo": 8826
, "Land Rover": 10617
, "Porsche": 4086
, "Mini": 2797
, "Jaguar": 3462
, "Alfa Romeo": 1946
, "Fiat": 977
, "Genesis": 614
, "Smart": 122
});

db.insert(db.countries.US, "2018-12", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/december-2018-u-s-plug-in-ev-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 25250
, "Tesla|Model X": 4100
, "Tesla|Model S": 3250
, "Chevrolet|Bolt EV": 1412
, "Nissan|Leaf": 1667
, "Fiat|500e": 193
, "Volkswagen|e-Golf": 222
, "Kia|Soul EV": 54
, "Honda|Clarity BEV": 86
, "Ford|Focus Electric": 1
, "Jaguar|I-Pace": 223
, "Hyundai|Ioniq Electric": 24
});

db.insert(db.countries.US, "2019-01", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/02/u-s-auto-sales-brand-rankings-january-2019-ytd/",
{ "Acura": 9764
, "Alfa Romeo": 1150
, "Audi": 14253
, "BMW": 18102
, "Buick": 17061
, "Cadillac": 11841
, "Chevrolet": 148602
, "Chrysler": 9054
, "Dodge": 27077
, "Fiat": 751
, "Ford": 180766
, "Genesis": 1224
, "GMC": 41309
, "Honda": 96375
, "Hyundai": 40796
, "Infiniti": 10302
, "Jaguar": 3078
, "Jeep": 58401
, "Kia": 37376
, "Land Rover": 7385
, "Lexus": 17420
, "Lincoln": 8116
, "Mazda": 20045
, "Mercedes-Benz": 23721
, "Mini": 2457
, "Mitsubishi": 8711
, "Nissan": 90439
, "Porsche": 5419
, "Ram": 39649
, "Smart": 83
, "Subaru": 46072
, "Tesla": 8325
, "Toyota": 138601
, "Volkswagen": 23074
, "Volvo": 5854
});

db.insert(db.countries.US, "2019-01", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/january-2019-u-s-plug-in-ev-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 6500
, "Tesla|Model X": 950
, "Chevrolet|Bolt EV": 925
, "Tesla|Model S": 875
, "Nissan|Leaf": 717
, "Jaguar|I-Pace": 210
, "Volkswagen|e-Golf": 164
, "Honda|Clarity BEV": 78
, "Fiat|500e": 72
, "Hyundai|Ioniq Electric": 34
});

db.insert(db.countries.US, "2019-02", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/03/u-s-auto-sales-brand-rankings-february-2019-ytd/",
{ "Acura": 12213
, "Alfa Romeo": 1362
, "Audi": 13560
, "BMW": 23558
, "Buick": 16378
, "Cadillac": 11367
, "Chevrolet": 142654
, "Chrysler": 10368
, "Dodge": 37073
, "Fiat": 616
, "Ford": 177467
, "Genesis": 1528
, "GMC": 39656
, "Honda": 102926
, "Hyundai": 45612
, "Infiniti": 10607
, "Jaguar": 3465
, "Jeep": 67075
, "Kia": 43406
, "Land Rover": 8151
, "Lexus": 20122
, "Lincoln": 7886
, "Mazda": 23852
, "Mercedes-Benz": 24389
, "Mini": 2679
, "Mitsubishi": 13760
, "Nissan": 103735
, "Porsche": 4826
, "Ram": 45542
, "Smart": 58
, "Subaru": 49081
, "Tesla": 7650
, "Toyota": 152626
, "Volkswagen": 25706
, "Volvo": 6635
});

db.insert(db.countries.US, "2019-02", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/february-2019-u-s-plug-in-ev-sales-report-card/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 5750
, "Chevrolet|Bolt EV": 1225
, "Tesla|Model X": 1100
, "Tesla|Model S": 800
, "Nissan|Leaf": 654
, "Jaguar|I-Pace": 186
, "Volkswagen|e-Golf": 118
, "Fiat|500e": 87
, "Honda|Clarity BEV": 68
, "Hyundai|Ioniq Electric": 32
, "Hyundai|Kona Electric": 16
, "Kia|Soul EV": 1
});

db.insert(db.countries.US, "2019-03", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/04/u-s-auto-sales-brand-rankings-march-2019-ytd/",
{ "Acura": 14408
, "Alfa Romeo": 1774
, "Audi": 20302
, "BMW": 32228
, "Buick": 18426
, "Cadillac": 12788
, "Chevrolet": 160486
, "Chrysler": 12169
, "Dodge": 46367
, "Fiat": 847
, "Ford": 199651
, "Genesis": 1451
, "GMC": 44614
, "Honda": 134101
, "Hyundai": 61177
, "Infiniti": 13406
, "Jaguar": 3679
, "Jeep": 87328
, "Kia": 55814
, "Land Rover": 9492
, "Lexus": 29249
, "Lincoln": 8872
, "Mazda": 26934
, "Mercedes-Benz": 30557
, "Mini": 3769
, "Mitsubishi": 19599
, "Nissan": 137362
, "Porsche": 4779
, "Ram": 51822
, "Smart": 90
, "Subaru": 61601
, "Tesla": 14625
, "Toyota": 185698
, "Volkswagen": 37092
, "Volvo": 9569
});

db.insert(db.countries.US, "2019-03", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/347358/ev-sales-scorecard-april-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 10175
, "Chevrolet|Bolt EV": 2166
, "Tesla|Model X": 2175
, "Tesla|Model S": 2275
, "Nissan|Leaf": 1314
, "Volkswagen|e-Golf": 581
, "Jaguar|I-Pace": 212
, "Honda|Clarity BEV": 92
, "Fiat|500e": 33
, "Hyundai|Kona Electric": 127
, "Hyundai|Ioniq Electric": 28
, "Kia|Soul EV": 2
});

db.insert(db.countries.US, "2019-04", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/05/u-s-auto-sales-brand-rankings-april-2019-ytd/",
{ "Acura": 11687
, "Alfa Romeo": 1584
, "Audi": 15024
, "BMW": 23816
, "Buick": 17996
, "Cadillac": 12891
, "Chevrolet": 162011
, "Chrysler": 8987
, "Dodge": 31262
, "Fiat": 931
, "Ford": 201208
, "Genesis": 1605
, "GMC": 49301
, "Honda": 114088
, "Hyundai": 55420
, "Infiniti": 8491
, "Jaguar": 2147
, "Jeep": 76325
, "Kia": 51385
, "Land Rover": 7165
, "Lexus": 21360
, "Lincoln": 8431
, "Mazda": 19702
, "Mercedes-Benz": 25631
, "Mini": 2621
, "Mitsubishi": 6963
, "Nissan": 87207
, "Porsche": 5018
, "Ram": 53811
, "Smart": 85
, "Subaru": 57288
, "Tesla": 11925
, "Toyota": 162506
, "Volkswagen": 31309
, "Volvo": 8367
});

db.insert(db.countries.US, "2019-04", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/347358/ev-sales-scorecard-april-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 10050
, "Chevrolet|Bolt EV": 910
, "Tesla|Model X": 1050
, "Tesla|Model S": 825
, "Nissan|Leaf": 951
, "Volkswagen|e-Golf": 400
, "Jaguar|I-Pace": 237
, "Honda|Clarity BEV": 88
, "Audi|e-tron": 253
, "Hyundai|Kona Electric": 77
, "Fiat|500e": 20
, "Hyundai|Ioniq Electric": 9
, "Kia|Niro EV": 40
});

db.insert(db.countries.US, "2019-05", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/2019/06/u-s-auto-sales-brand-rankings-may-2019-ytd/",
{ "Acura": 13547
, "Alfa Romeo": 1572
, "Audi": 18892
, "BMW": 27108
, "Buick": 20765
, "Cadillac": 14874
, "Chevrolet": 175322
, "Chrysler": 10903
, "Dodge": 47759
, "Fiat": 1025
, "Ford": 232161
, "Genesis": 2313
, "GMC": 56890
, "Honda": 131985
, "Hyundai": 66121
, "Infiniti": 10413
, "Jaguar": 2021
, "Jeep": 90326
, "Kia": 60062
, "Land Rover": 7337
, "Lexus": 24537
, "Lincoln": 9728
, "Mazda": 25192
, "Mercedes-Benz": 25631
, "Mini": 2822
, "Mitsubishi": 9750
, "Nissan": 121570
, "Porsche": 5010
, "Ram": 67117
, "Smart": 85
, "Subaru": 63972
, "Tesla": 16350
, "Toyota": 197637
, "Volkswagen": 35702
, "Volvo": 9761
});

db.insert(db.countries.US, "2019-05", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/352626/ev-sales-scorecard-may-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 13950
, "Chevrolet|Bolt EV": 1396
, "Tesla|Model X": 1375
, "Tesla|Model S": 1025
, "Nissan|Leaf": 1216
, "Volkswagen|e-Golf": 264
, "Jaguar|I-Pace": 228
, "Audi|e-tron": 856
, "Honda|Clarity BEV": 82
, "Hyundai|Kona Electric": 91
, "Fiat|500e": 60
, "Hyundai|Ioniq Electric": 61
, "Kia|Niro EV": 159
, "Kia|Soul EV": 1
});

db.insert(db.countries.US, "2019-06", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/u-s-auto-sales-figures-by-brand/",
{ "Acura": 12148
, "Alfa Romeo": 1595
, "Audi": 19409
, "BMW": 31627
, "Buick": 16612
, "Cadillac": 11974
, "Chevrolet": 149551
, "Chrysler": 12941
, "Dodge": 38561
, "Fiat": 933
, "Ford": 179729
, "Genesis": 1887
, "GMC": 45510
, "Honda": 123953
, "Hyundai": 64202
, "Infiniti": 9839
, "Jaguar": 1892
, "Jeep": 76826
, "Kia": 56801
, "Land Rover": 6593
, "Lexus": 23047
, "Lincoln": 7782
, "Mazda": 22828
, "Mercedes-Benz": 29201
, "Mini": 3235
, "Mitsubishi": 12317
, "Nissan": 113665
, "Porsche": 5205
, "Ram": 75227
, "Smart": 74
, "Subaru": 61511
, "Tesla": 25700
, "Toyota": 179305
, "Volkswagen": 31725
, "Volvo": 9934
});

db.insert(db.countries.US, "2019-06", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/357565/ev-sales-scorecard-june-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 21225
, "Tesla|Model X": 2725
, "Chevrolet|Bolt EV": 1659
, "Tesla|Model S": 1750
, "Nissan|Leaf": 1156
, "Volkswagen|e-Golf": 366
, "Audi|e-tron": 726
, "Jaguar|I-Pace": 236
, "Honda|Clarity BEV": 52
, "Hyundai|Kona Electric": 116
, "Fiat|500e": 25
, "Hyundai|Ioniq Electric": 62
});

db.insert(db.countries.US, "2019-07", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/u-s-auto-sales-figures-by-brand/; https://www.marklines.com/en/statistics/flash_sales/salesfig_usa_2019#jul",
{ "Acura": 12759
, "Audi": 19370
, "BMW": 23015
, "Genesis": 1586
, "Honda": 128537
, "Hyundai": 57340
, "Infiniti": 8660
, "Jaguar": 2020
, "Kia": 53405
, "Land Rover": 6456
, "Lexus": 25025
, "Mazda": 23292
, "Mercedes-Benz": 27490
, "Mini": 2827
, "Mitsubishi": 8613
, "Nissan": 90220
, "Porsche": 4956
, "Smart": 56
, "Subaru": 64106
, "Tesla": 15650
, "Toyota": 184179
, "Volkswagen": 31188
, "Volvo": 8795
, "GM": 236518
, "Ford": 192720
});

db.insert(db.countries.US, "2019-07", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/362819/ev-sales-scorecard-july-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 13450
, "Tesla|Model X": 1225
, "Chevrolet|Bolt EV": 985
, "Tesla|Model S": 975
, "Nissan|Leaf": 938
, "Audi|e-tron": 678
, "Volkswagen|e-Golf": 460
, "Jaguar|I-Pace": 213
, "Hyundai|Kona Electric": 150
, "Honda|Clarity BEV": 47
, "Fiat|500e": 40
, "Hyundai|Ioniq Electric": 55
, "Kia|Soul EV": 1
});

db.insert(db.countries.US, "2019-08", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/u-s-auto-sales-figures-by-brand/; https://www.marklines.com/en/statistics/flash_sales/salesfig_usa_2019#aug",
{ "Toyota": 218403
, "Honda": 158804
, "Nissan": 118045
, "Subaru": 70039
, "Hyundai": 63737
, "Kia": 60730
, "Volkswagen": 35412
, "Mercedes-Benz": 30144
, "BMW": 25505
, "Lexus": 29931
, "Mazda": 27482
, "Audi": 21531
, "Tesla": 15225
, "Acura": 15189
, "Mitsubishi": 8139
, "Infiniti": 9185
, "Volvo": 9187
, "Land Rover": 6572
, "Porsche": 4636
, "Mini": 3911
, "Jaguar": 2128
, "Genesis": 1757
, "Smart": 74
, "GM": 289475
, "Ford": 209953
});

db.insert(db.countries.US, "2019-08", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/368729/ev-sales-scorecard-august-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 12350
, "Tesla|Model X": 1825
, "Chevrolet|Bolt EV": 1720
, "Tesla|Model S": 1050
, "Nissan|Leaf": 1117
, "Volkswagen|e-Golf": 689
, "Audi|e-tron": 593
, "Jaguar|I-Pace": 160
, "Honda|Clarity BEV": 65
, "Hyundai|Kona Electric": 130
, "Fiat|500e": 45
, "Hyundai|Ioniq Electric": 40
, "Kia|Soul EV": 8
});

db.insert(db.countries.US, "2019-09", db.dsTypes.AllCarsByBrand, "http://www.goodcarbadcar.net/u-s-auto-sales-figures-by-brand/",
{ "Ford": 165862
, "Toyota": 150796
, "Chevrolet": 153107
, "Honda": 102827
, "Nissan": 94213
, "Jeep": 74288
, "Subaru": 51659
, "Ram": 54232
, "Hyundai": 51951
, "Kia": 44619
, "GMC": 42608
, "Dodge": 31517
, "Volkswagen": 26947
, "Mercedes-Benz": 32002
, "BMW": 27467
, "Lexus": 18860
, "Mazda": 18838
, "Audi": 16130
, "Buick": 15317
, "Tesla": 21875
, "Cadillac": 12093
, "Acura": 11098
, "Mitsubishi": 7722
, "Chrysler": 8940
, "Infiniti": 7031
, "Lincoln": 8455
, "Volvo": 9323
, "Land Rover": 7488
, "Porsche": 5213
, "Mini": 3505
, "Jaguar": 2002
, "Genesis": 1559
, "Alfa Romeo": 1304
, "Fiat": 714
});

db.insert(db.countries.US, "2019-09", db.dsTypes.ElectricCarsByModel, "https://insideevs.com/news/373812/ev-sales-scorecard-september-2019/ (incomplete, only models with no ICE/hybrid variant included)",
{ "Tesla|Model 3": 19100
, "Tesla|Model X": 1675
, "Chevrolet|Bolt EV": 2125
, "Tesla|Model S": 1100
, "Nissan|Leaf": 1048
, "Volkswagen|e-Golf": 554
, "Audi|e-tron": 434
, "Jaguar|I-Pace": 160
, "Honda|Clarity BEV": 35
, "Hyundai|Kona Electric": 190
, "Fiat|500e": 40
, "Hyundai|Ioniq Electric": 70
, "Kia|Soul EV": 65
});

db.insert(db.countries.US, "2019-10", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_usa_2019#oct",
{ "GM": 209870
, "Ford": 193571
, "Toyota": 188787
, "FCA": 177120
, "Honda": 131443
, "Nissan": 103563
, "Hyundai": 59029
, "Subaru": 55531
, "Kia": 50007
, "Mercedes-Benz": 32130
, "Volkswagen": 28072
, "BMW": 25440
, "Mazda": 19520
, "Audi": 19172
, "Tesla": 11400
, "Volvo": 8807
, "Land Rover": 8093
, "Mitsubishi": 7372
, "Porsche": 5447
, "Mini": 2962
, "Jaguar": 2350
, "other": 1556
});

db.insert(db.countries.US, "2019-10", db.dsTypes.ElectricCarsByModel, "https://cleantechnica.com/2019/11/10/teslas-77-7-of-us-electric-vehicle-sales/ (estimation)",
{ "Tesla|Model 3": 9000
, "Chevrolet|Bolt EV": 1500
, "Tesla|Model X": 1400
, "Tesla|Model S": 1000
, "Nissan|Leaf": 887
, "Volkswagen|e-Golf": 637
, "Audi|e-tron": 462
, "BMW|i3 BEV": 359
});

db.insert(db.countries.US, "2019-11", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_usa_2019#nov",
{ "GM": 245108
, "Toyota": 207857
, "Ford": 188718
, "FCA": 174324
, "Honda": 133952
, "Nissan": 92947
, "Hyundai": 62768
, "Subaru": 56893
, "Kia": 50504
, "Mercedes-Benz": 37263
, "BMW": 31213
, "Volkswagen": 29218
, "Mazda": 24374
, "Audi": 20618
, "Tesla": 13200
, "Volvo": 9635
, "Land Rover": 9514
, "Mitsubishi": 8188
, "Porsche": 6326
, "Mini": 3067
, "Jaguar": 2958
, "other": 1619
});

db.insert(db.countries.US, "2019-11", db.dsTypes.ElectricCarsByModel, "https://cleantechnica.com/2019/12/13/tesla-scores-77-of-us-electric-vehicle-sales-cleantechnica-report/ (estimation)",
{ "Tesla|Model 3": 10500
, "Tesla|Model X": 1700
, "Nissan|Leaf": 1140
, "Tesla|Model S": 1000
, "BMW|i3 BEV": 918
, "Audi|e-tron": 621
, "Volkswagen|e-Golf": 366
});

db.insert(db.countries.US, "2019-12", db.dsTypes.AllCarsByBrand, "https://www.marklines.com/en/statistics/flash_sales/salesfig_usa_2019#dec",
{ "GM": 277640
, "Ford": 216439
, "Toyota": 207373
, "FCA": 191075
, "Honda": 136566
, "Nissan": 104781
, "Hyundai": 66945
, "Subaru": 62364
, "Kia": 51229
, "Volkswagen": 27877
, "Mercedes-Benz": 35279
, "BMW": 35746
, "Mazda": 26491
, "Audi": 25850
, "Tesla": 29500
, "Mitsubishi": 9915
, "Volvo": 12360
, "Land Rover": 10490
, "Porsche": 4733
, "Mini": 2310
, "Jaguar": 3311
, "other": 1481
});

db.insert(db.countries.US, "2019-12", db.dsTypes.ElectricCarsByModel, "https://cleantechnica.com/2020/01/16/tesla-gobbled-up-81-of-us-electric-vehicle-sales-in-2019/ (estimation)",
{ "Tesla|Model 3": 27000
, "Tesla|Model X": 1500
, "Chevrolet|Bolt EV": 1307
, "Nissan|Leaf": 1227
, "Tesla|Model S": 1000
, "Audi|e-tron": 746
, "Volkswagen|e-Golf": 264
, "BMW|i3 BEV": 214
, "Jaguar|I-Pace": 176
, "Porsche|Taycan": 130
});


// https://cleantechnica.com/tag/us-ev-sales/
