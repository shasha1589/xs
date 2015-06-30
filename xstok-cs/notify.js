var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyCJZ7b2qgxB3ALz9aWrcrXe_UU6wcyvG9w');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"Please update your XSTOK app to be able to use added functionality and bid in the Arvind and Welspun auctions tomorrow.");
message.addData('title','Arvind and Welspun Auctions' );
//message.addData('msgcnt','1'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'more';
//message.delayWhileIdle = true; //Default is false
//message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 registrationIds = ['APA91bGnb94GnBQWs8YVc2tQYmaYtNGjZ25BHing7W75GIRBSeVKesvIKl7kywVztrTe-WP8Q0rpb-14PyhWyDjPIehsWzdbq5RxQisOzxwH4Qi4N5CtwILHjMq5Hu1zMk0h3Q8U9Rqnac_hJF3FSv3u1Stn3QZOIQ','APA91bFP7olZ01JF1ZHGY2Gi5u-2c6YaGelgFhPlN5i8V17I9zrA9lfL3ReUCCNZPC83LO9C1v0vdxVGm8eyckRj_75TK8gvJDrb3kmBIXDPYxjOPzhHddQHSMVzciYPwwTV0t7_FcrWK9FJ3lkZAynH2LAFDzdPeg','APA91bEy5RwsESrUTIZunKa2BtQwg3fkDWeFpWf04Xqf_okQ77P4_LlTD1tqj5dr1_iFPKBYHKE8wSUJbG8uDjN1Z6OELsdWSVAvBHQj0rgkqGgK2BLvBzQU1SAlHV41G9JczE3DqRQosCDMV6FUF_3maTk92PVfBg','APA91bG3altXbPm5tXb3JBMspfl-r7ZtKGmHVbsAgqz4No2uOgHtYPtcjdtjbnGi0U9UHL1vfCuT1jtbejfFvtfZylMnL3vTaaogfB0XavDsId1Gn1e5luhEG4kRr6nHZODTugUFSPhlRjgA73sGgxHkyd4cMyfR4g','APA91bEnYEquP0EcSQASFOCyfmJ8JVLBaIdufGtvyjDbTiW-xJ5Sn_K-bLUlAXfZ8wKvKJwfD620As80_qRk6PafIWyNG9x6B3yvzZtawE1COyNHSB-Tg3f8hAjRd38dJgDAZHrgx_YYLgMaSvfgXHbQh592g5pjSA','APA91bEuSyS0dixwbdHkOj1dzOzPlEiwnEf_DkeOpI8R9a3CKry40hC_HjEBoibMQ62Q1mq2hK0Vhlnm0KGXCSDp8lyLDGG-AVllzyToXUD8ezlzWLea2fT-ZtzuAWgcqcBMlnhZMOnK73QV7cEoFrxPjQGwoBouYA','APA91bHncLahLxEbZJKpO1eygB04UFwAOG9kpvm_wFGmt4Z5uOsx1imHDzrx_iz5ZG7feNf1CwVOESRZZDCjuex146dBIi-nzaQFtyZm5BJszHaJVLVyPJ-KjBFQ71XGEjU83PwhGDqHtwH6XY0xtiX5oo4wRsXxmQ','APA91bEzxqctjVRzvCMy3LEaKqgMzV8UU3oSJm5AErZZO9bZxQI1Y5v6LJPnTTaDxWJxRFe5zz3P7da0Qe2EmlNwuDwF3HNA_MuAR4tO-iDMT01L9UJhDrSuDkQDWo1Yselw9nI4fK2SHtnOgxopRVb_5FA-xRwbqg','APA91bGLbKbeMinL0wO2cA-05ir1KkXFp2oEfnyKVaVwOBWwvUT5oJPDJ9vlLqgxkTb-QM2ijco3tEPcbPsn-_gAtER4R-qlkMjIYUxcc3IVZQKofGy3FXfoiOdOGgM9o17efUU7w4Zrocf4BN4gUUxh-P9Z5x08eQ','APA91bHLztaP0sYLiKQun3et6GOeyT3euo4hUFnbjL1mvIBH57iuSXRt2MZ28UwaCTeoi0qIwg-QWoSWFAesDhM6I6uCgQSqWLhF_TkUyPHG1Ztw-i2dw1A1Sg-7vTVHVjQ8nRiOFtjd5JqcnGY-muxqnxvr3EysLg','APA91bFjC0B5DYr2tO2fJTYdhKl2plantamZzc_EZlppifKVhRg9GhA47Urv6uW8Y4xJnniR9Pzn8gz5t7MU_W8vLc4oFRn4SJXYZM8HznCNwyTQjsJ66TqFV6v-q5DfGpfR6bS7E0atAYVvIWvkpyL-PZJRCPT3rg','APA91bH2_MQu_upPEZzHj-wMELHkI7Ej84aaF2VHY6oG0utU9llduaUD0S8laSWUhAui9f2PsKjzzf6HfFViCpvOTnrZmKXFfV88b_Ww8TKX20UU1u31LIOttP76IpkySeErW_zAUdqawRs2_VC7bOU8v6XOPOSL_A','APA91bFvEEaDlZ6pplKaVD-7PBmMg1ZE-54n3-2v9k87BndRL-YAPgSI_jxHO790kRjQpsHx5qVaMcpecjljkDF5dxD9q7-nmwvCoP-fxjr5JvmF4UgwzwwblZ1wn_YmVK3-h_iKI_HwLMnK453zNTGi8HwsvXB1dg','APA91bHBzn7-tzfSPPNK7U2Q6Qr4peF9eybDowjFKjStQ214ZBwJRwyfgbZT-e-aYDAk2P0NCWZGDYcILsbiad7Azee0HAOhC4ydWKx-6YvIAdW4EBQETgz2R-7uETudExpimH3BzTVuMD-fw3a0ZW1GlZez5M0bZw','APA91bFdUCv0gtN80sIg9oeIsR-yI8DZY0ZOdjApUWb67N8pSF9bE37cv2EJPXNJk-GPJhFHtCpWaoHr0lyWwyJI2lPIz0eiZXZ1OnX2gX7IQcVVVyo9QZpg0HsI7RcW1hz72qajCBZWvvTDgvL6LL2NGFY1f4Ruzg','APA91bFP-Jk37_iDHVG0rLlfZUg2xyEUrGG6XHd3n_kSMqdkBqQhQhztpOm2zX1-6YcexiQOK0KVd6Yc6b7HaJfo-I3LIBdzMaHTfcAP05LETYaRvsdsaIOP_wfraceO0OAS2Yx4KYmhN2Fse0v856yhsinc3jmY5Q','APA91bEnf5xD5-c-W5zQnpZ8pUJfHWojfJSvGmOQ5QC1SwwWVf5n7rTFbgnG-q4boGrtUDk3Yn6qPMgyG35ASBHSlMO3aVTP7GXdifAlRbywnIRJPjSkGfvNaqGupshWaYErwaKeWNTd9iMcy5IqmUIUJhZZc8GMvA','APA91bGL4dfsr7OmE2Ra3SJe5wLSBOH45ETH5BfuBgAgKROKHh3oYHLzHd1IzYUNFB1WvWYxziE2NoT2R3A0iWlpiAGPhw0qJw_XgSjG9yoqvylxg3466qUTJzTk_3DKOT4BfasSS7TCEk47-5MBZdXgf09Id4iTtQ','APA91bEgsRt5ZWBwl0J5Xv1WljwgnxIjXX-po4X-EMGt_88_7V15ygU9PwINygeysEOXY99VoOdirKsfUsaGaPGpL4i0NIhyaL9yrPqkC_p32LnqhfxYJkm9j_IdBKhf9moRMEKAOq6F3pSzWfLlyv128ulrEdmeOg','APA91bFlMBmKRXnmf9-uuvwvmKPTOzuaBH4adZOzAEJkXIhBn_N970PtfC2bWDKjB4k5uax9FX0iOOSo8Dp_uA6wFh6kG-GHhnPwr4mTDinggPNP5Q4GXsKtnmaWaHoRFfBFpQ7yk8MC7kxyDrIzQ8CGlyUES_sBmQ','APA91bFqmnSAcb7FJSN1zLcivyN4NT4PBnKVj8PxnqdNkM3l-Ex0figWqWmyMrimmUyLPVH-Q3XzaI-HxEv1kPjxDcvKegkAsBl0ZIS3XKhEvw-1D98CI4zKofto3MYYBCW1OO3lhkCRQsDD-vz8XtUGurJ1nm4kiQ','APA91bFxCtc-xgF91z_hm3PMN34lt088rmviHwQPlWwfQuAn3gJto7Q0LqDWTyyOgYIoVUuCTiv7CmPA-QG-Hq4z4oR1tEpsHUSne4XFnBAf_KjxaIjnKfRoM70rCqqxPUNdpyr5d-yb_FYD_pF9GAgb0kVHqRXqSQ','APA91bHjMu6hCy9gLZXHN-Zd9twtjMbDdv3N52EJkBY2z5sYjy9DAYpK_2YQn1Z4iZv1H751ShwTFJofm07OrQqMfYW69vH89L23kvh1Yw1TVxvfTJcKYoJzuSkdZwVz1XeIK0-R86Zc6xlZnfz_v8hdgRbCg5o94w','APA91bHPKkNcNjmezdEc0mlWBp-0aVa5T_VNDXJ_IUx9ShzE4rnEUtArjTYlAc4v1oF5-Lymw3pqowRRJzoaOnZ0sU1CsvseTkakNjczvek9FeWuy9eWeAoa1CuudACswxCuUBvbXctOZ12CBTWeCeifrbTUcwSaVQ','APA91bF72eu64MKnds76E5h9RqzAsLpFBlz0t7KvUxxydcneh4q3k5nWqMayzdAj8Fmh74EbM1jk3cKW1G0EvOkCwuiFDsnrGHJs4XEIPTqV83To8xXeaeF5CIM8NI61FqC1xP8QtXQ_dxirAdctcru1fjZIfKMnpA','APA91bFX6fNCQ2qarl4aIEv9MVwsC35WSn5BG4KAqWU8s2hylJIi15r3459UZfec6-ZT7aY0oG0jl32vqvrOM7nI3paLru1HSseFzS0m8k9L-itf6Qy_KOwrExX3mBYoZ76qjaARmstk-ulOwVMFWqeuy6l8EyCQnA','APA91bEfRrhw8wPtcGR2wXB7ehLr5WiN1sQ2fDD7fJJdUS4NoOV5yLSeHvjLO88YXLdL2e7QePrSAxQTziWE9aCx0Mhqq2JA_L4MzDnse12OKkC6TR-L2YLALY6kwVpMkSsekIjLw8APnuBCE5qt8zZCaNtqRObnig','APA91bHjgFZtQ8hyQBds5qr0veDSjk4jfUIYmr8S06VjyIOzDsXKDSew9Tg7TlJXOHcigfwAUaIBcOrfcL_bvs5GN4x7mar0kPz1yLBX4qcGY0UaVt9Q4Hlpjc9cfkpi8xJtNg9LMdlVMs14fjC4PY8p6ta7x7mZxw','APA91bFiaUSgal4o4ha0gKqkD_xRmPrA7qsl8oQCi-oV5muAy6RLKPVUGeIbMk39DZNauIDumumm2QG_EDQiWKyH7EHVnX_MooODZ8K_wTlJqbgDkaBYg2vIfFXMiT4OgcDdpdNjJTXjCHKFmm8aGxC29FPZJ7aLwQ','APA91bF-woCEgQkxFWBShUTSM5y39qUAyGjt5jKaKetG1ks_A8g3dT34DQ2A4UZKwKoPKK8SkUiXPNXOWswQ4dPrswUatPDqrjYERrR38O0SL3CKstWv1YV71SZtdy-hfGNc6okoXbmkcFqlBBZcjmxk0ftHExRW7A','APA91bHUY8Yfax_1v1qkFguXClOuGnsfhd0QIZIE9KHZyBUjfscfTXb09_7haH2mrSvYI91pj9QWM5PcBFkmLsc3PUupU7eruKTEBOOksFHq3-eVyitdB5nCbTD6LvztgBlJipAtYwbu_mGWKExAPiKg6VHen_QHlg','APA91bEZM8qw_fCdwKGOv1ZRHiadD8ipUeV48I8iUGLwXLChEoR6xGIySYwPCv0_tUnz4l3Wfz7DdGJBNqhunCmAqP9KPYkBKkvZDiVueVaGiX1tQ2zM8LoUlmRFtpnW5-bxajdWTa1j','APA91bFgKQYTUdfOIy5dBUSFBkFDO_lJAJQT3Gn25PdJRT-FeOGVwm7Q3d1exSzVUWs-2pqNtroNZpeLsvxv-43zQF-zhsJuzDMjFGMS_OTZwouR66IckdMgtkN-i8AyQpWGeT5IJf9w9NiRvZv9BWN6SMzR3MF6IA','APA91bEvZcOuNr2-qRtq_XUiDTALMe0a1nHlRdMAS3Ac6Yy-ygbByBX5sKgtYyMa8T5NfUZckDRzkCwKSkyALOmqnrkj9kHK7DOop0nglb8NBcEjJfBgZEtIt50rzTwVLFtpOjr0Ix0DyiBlkBRN3P1rrsf20LuVMA','APA91bHKckJkRIJzYTvBhFvy3qgoqlUXiRSlHa7UC3Igs45zmdnCoSXnoVuiMjUdz_yjn2tDg2ffYrx_Ze-cl7t8DvdNV7j5XHigvv09Qc203Ouwg16diPf9xsxabpIrqj3s8u8qGan1','APA91bHNjYeldJFNaS4WDgNQ9f_EfHdjldC2Fyw4jJQ6WdvpdJyZFN_CI-xlY5j20FobvoyvXrJJ9csjzFCq4T2DXpiWuNV3IYgfmTUxyx-s9n8FVtPCLrDrHI6gjUyKYUnAipDaJvjC','APA91bGAaPL2ScPwCXXxYb9zn8w02FitjdKQP61OwfLCYLIyB19SOFbSaVtTnMoE2auknGbpDYq7Rqxr3ip_LDT_a6dUwUIBnJlVU0Itml40UBmC1TJS8xMZ8J63v6IhNcwxepD5_yp7k8TD9tX6xAYN3IcFi8D-JA','APA91bGeeuovT0wGtxOD7ZtYPTBeTnUqt2fYm9LKZ1dwj-cSBl5h2Yqzj44WGTyTIv1ARN6_3txckPc2aOy_Sj9N7_7Np2U0HTKBVTxHgIe7off83pxDBCVRTu-uvD9fe32kfwyu7UVwrIuQnMteXa7Em1oRH9O90A','APA91bFFWfVE_26cn3VKiNosKVt29iYy24WSTBeOQYFyN7_laya84cpH0qZ-3aR4qjzWMKalRs1OuFQ1gFfbl0OLu7qeI2btRT8_wH_07jIa0nrBlsmE3sEkLOAznZ0ORurln3qmju-F','APA91bGGITOroSM019WCqpUzOe69zvvRQgznMqntXExcRlu4iZhO4CV7a5GNE9rHOvDmQ_7L8MZ_abRnW2HlSTmMIKf8Qkvrqux-n7MsjZnZv5zttF0qGSufnv_xY6OKthqXFaryrQkLncQAvKzUyNVqqYAMQ3M71g','APA91bFD06uGR3PtiOtZS3bb0i3Lc0H8aIN1Nh1Dwq2Pv5QZNeOkr3bcEp7E8p-vjBDsfR6QaZvs_PLUxIH19TnR1OJxoLUcKoq3DcU8T18f3xd8p-Se8ee0-lszkwXPbh-znh8_OEvb8LUpuLJwncsX5MsQNXX_3A','APA91bGGj5tZYx-OhhMzkktVOMac3aGvl4SeYCAe0FKuuomzxprm5UA17LKKlzPdAAX3YhnkSNYaxr3raF7HGaiGSfdqOtHrkWFeofFDW8oRKIAuNdVkmQm-OcCQPiPVL9lw-wMDjvIrWMfUDQ7oxsSMD4dsnXI68g','APA91bE-hdr4FVIUolrTCwqc6SU0VO5jWiA0GOdD6f6aoaukBtOqf-__Kme4SVqNKealhMFYC61_luFqTOIeGBkpSUJfZVRS9WurECS1qxdh9PphctGIG79oWlC76DV7pVm1UQLgu5gfqoG3BygfvMVkJrKdt9U3TA','APA91bGgD8-li-kdwI5z8_lqu2AhsJpUYmE9r_4UG4ghwvVSN03ef_FlQj1j-8cfSO3gPue-Ko_inAbX38jVqSPTvfkLPFIZ4FoL0duvoRQXTSvnyHKvkPtoyK7xk7RstURtyl3a1mjL3xOPJ6C9CEznx3fWrkzsnw','APA91bE1j0bYWjG5t3Xz53gMg_g58LowF745dC8IS-GJulEU3MDRozvNo6VGll1vFAb5FuBG-8N6QimWnw8Upbt42EiGI-i7DFXL0954VMAIp-6XwS9PwlS6COAeShOXNwQCKOMW3DVRJx3EsvT4Y8en8QPDyZjx0g','APA91bFpIpRnXxB3G19CbYcQxvqE_5MuVqVblGwZRuWoVpxTAZ6o4-8sINhMmCIX4gQbel-R0hq3z3PTEisd4NaG3g6h0BH8wtg2OhuMrpN0BhwnAyQNoKKFEXxgAkcODN08ZE9jZy64R0ew4BK11I-20t7niVM_IQ','APA91bE2soSr3K9sf_AXrzj5gcSVxjAjedwxxPW_ndcwd1dY8NwzhQgJtqx5FjrPtTkPUKEGhAopouw0aNGgCHIGwKfWVeiZpSAbCuZe6aNs4jhR4FWMGevfM1g5F60UtwvjO9f-IvlZoVDrqU236IzrUceefYJi3A','APA91bEYlo3OQUlw6NLpjIXhE96JZ4NmAIZjixiqoZV3ydW9E_91bsM9_yLN8X3nVUiEX6u-YvBn7YnvsmNsn6CyeR6jRpm4lkAA8vasQl7UQRT3dNSdMDOcnMSWOiUXQY-CNA8tjhq7PyKMspJRcV8uEXDQzIaZ_A','APA91bHLD66O1Nb72cO6ShxankwfmT9DMI7MwSGKSjIUOyHxL64FS7zJRRHY0VE3VBON-EBFCJT1FOY5czySldEzn0l-VzH79BrFQ0dOxioduouAsAjgy_70bYtah0uKN0BD2kQAjCDMh-lJjiol-0ZYfDEB9nR2SA','APA91bFBsxHUHuHPk2OsosLe2qL1ULxn2NYK71OnC7t-4sBjUtCwEQEQxbOZ63YzD1VRmUtF0fehw86geMPONvVX413qU5C86-QsjvJVhgXZxuDebneQCw2RxDuqGo6hNCbhhjC_OQllctkmOlx7zI-K-5-_f_yT0w','APA91bHusrrc6nOtiyi2QakodPBay_sJwq_x2Xt3LxFAbhqh1Co74lFEcVPh6-HGkoToEqDTTujCBzomzT5jcXtOOAl7AVmeN6IChP-gNEUlRmqS1XQOi2OxJHjPaXSprGjDUq_SFT6F','APA91bGkv3WSbNURiphVyBILW1lnomxXrlKEhf8qHJQNx2ydLbBhrBm7qoNgnJBbFZAgAjLXadlO44nXN9wlMvbB2sh3VY_plUG_5AuCwFkFT__dfkUuW93YyhjJEJStSxoC7klJTVLSu_eSTej2u9h_ibaKOZ_Mhw','APA91bHW97w6Dna6BV0Sl-2VECmu0S_W9fltGhBuKYJFJJ-wCCjt2P8BK4qTc61LwKadFLycZYAleWa5Yr_JJQYO0Lb4tTmpmqSvSbKiF-CBy9_QMWTRpSZw6FP9YWQ3G86HvMvRw-qEfs1whuaJs99XJ8pnWXSIEA','APA91bE0LxCm7Dpma6jXr5EoRs8obehwXUtIfq9SkCl_KmsmjwTNRqOQRrtkT7OlYb2seFMA8GQX3t_2OshA2QpgTUeIla2iE7sUC7xFQ6oasgDcg3rZ5cn0hRDyEzuuHNm7npMLxkKfG8EmZwjfh_UI3ef8VeOQAQ','APA91bFmw4XpZEzqBz05DFH6XMmOB7IU_hBWMsrSN0DxWI3azJCA3owHgCywmmXwb3yqB9b1QQ3nIiIzw25mDIdyLa9i20Wj8lAK20T5uuGnNWpM8R11i79Pvqzw1IJNsCM4DpqGqE_PCrfGPQ7HzadejwThxbitOA','APA91bGoIrTZPZ6JQS93rneYqEGb0WwukBVlxLnHsZ1uURnwgduyqt3CXosOrDTkBI5ixhza6-3Nv3IQSay6YGvQmmNGPN97IOqdFWJ9Z1YECIvrhU7SOJ_LPciLui-p7nEf4qTOjh22','APA91bHh7QnMYDkQ132JZxtqXydVetl4KVqnlf2oc5SsOi63ZpK3BBW_450M5l6S5dSAzZw-gpEqk289hF6NZlCJrvMotKuDB6jDXE0-Q05NV8yAw4RSx0Vd2ie652qVWThyBR5G4F6R','APA91bG6TCLdQ-CU1KiwBsEHnEGCA_k8GF5m34Cbvya88NgCJQOajJ7nC4K3UOrznlnUB4zm2MEmWrPr5p_wrbDYDNK4H43LMMg1Vby2BuKCDe-nab9bCJu9uVnfYgUdxCJV1EoYlN2yvia_APJ63YS26ciprxdLxg','APA91bEIKJq4UazJ9O_YcoH3muygx0mEvJea_JWdkY0TkzXeXnzKo3HbQM2DnLhuw-FZC-U7KQo0mNqqLZlTfslM0YB3ibXDhx62h7kH5rEOTgXH3-gchj4fQSIiWv-ODsg41Gm5Q7bW','APA91bG88ATkSWZ7o9eGzFbgclFHkoidB9Xb_O6YvOhKx3vjyClZqEhqUcc7a2f_po7OYyryjOvVni654wVyp8Oku5TIudimPA50i11KvU22HZRQACOYto1ZCo5N4_ppgf_lySoRL7Rq','APA91bFtQPiPrx83ciNacpRHpV7-siwLZHJUuqx_Vy2yBkQrVhZYZwb1iIHyPGQlISWSWM29RdhbYESnSaY3YRkv6kmlxoGAx09DyQtiq_EZhrdJ5uFrcquWHBlqJSpgTMwmn3LLlsyupYHjpWqhPI_dKAsNY3dgtA','APA91bFL5HzQx0fVZABdrq5X6kvCqu8si32g1neNRtOQS_AO2OKZL7CVCt3LNYmSBHxsfJTZOfi6RBCg8_QLWhZtSaB1s3iPKW-j3turMD4ZTxsCU0TSC5aZxNsHTHDL2OHW_jw1d65c','APA91bGBKGIU_81neJk2k-zl7hXaox26uWnKFcvgbcK-EKsqyPO4qQ33RqBXqVJTHlvNQUgmOwD8ww3q7b8XCXC1_9i6_bJnirCKDzQ0E7K5bonfPYDLgGYo1LTJFnnPLaNsQozTq3Su','APA91bFnvHEcEMn23R5hxcr02Mh4SCMwC0rMiHf9xH2SeXCShigfk2pHW1ULz2MYgl5e0PhkHzk3WFvWLYXhZivT76MEE2n-g9GQgknsPRaodus0P0yACljrZ6HK7xN1a6rbYj4qmq1w','APA91bEq5rdiCvZ8NkmU3RF9bpxlMaJwqyb7Swr7I8y34zkxBkWH196Ow8LroLL6jkfUAPp4Q_vS9n0eLZn4EWinD2TOdX-5euBdekPXudqhC5-0ch5dBmv3MJsTjn6KIKC958xbeJ4z','APA91bF6gQ-BHMFWVXSkcVor21xAeT5ez1o3t2_npwq5Frcn3r2dzTQES56BSG4O7q6cWLKWfiioZ8vOfvCqVQK_5AjO2YhU-Fh5hoP2i2L7IJRFfYEPiV7Kl-grpSYjDgKq5qpRC_fY-IF7b5YnVLC-ORw1qYS0-Q','APA91bGAP8ctmD-x_f3AZGzZtEunf8eMF_idJTGnZkWka4z2_nIOrG1gNqoOyarFf88RyWpGIuZ-pCxjPyd-OAqM_azx58J9R_IHDlM_q3cLZVODhWK_T8lWyhXXCsm-VnYfWqELL3W8','APA91bEtN-EYFt5_H-ATSpxpsGFwqlUNHwHLRME61yxWA4Dv5rng8-hVnWaHEoItCRiZuiNvDSHgpYkV8yz0neaf--oUm8cvktQtsGs5M03Zhdd27-im34uOHMHo3nCpNQlNdctXJsEH','APA91bHxTknlYWFubk0m7ucUkCkOZKPedWpd3NflJxEQHUyvJ2HQwfECaALni93SNE0voOQV-5L4dmV-gAyKBwm_ZiRGhKPxwx6uYddOXDq9I4lv6d2VnwmxWHMD5jVP-j4XKDpMTCsU','APA91bGvchDb41uYBQaYfVRjYYnC9AwgpVV3Fnz6wK9ZsHgjimj950Vdyq3WVeCWkkFBO8td2dNpFtdYzmLyjblOgxmn5KwR6yFnr-C1sQAlaUwoyZn-WvAI6BUjXut-5cF6zXFU0WID','APA91bF6kKGmeD6gPtOAjdLcwMRgmm20olMB352HQYKO6Tyi3uHi5bR2jhvAjaSbDkz4eZ06neY_Jl1g2g010oaCjbU8mAmI_6E0AYukyXZOTGyeC4gQDkn5oJjxvAJb8nI5O-RRS2Au','APA91bEa33e8fUbBeuoqmgkmJmTLGN3UEE7d6M12bKoSzpcMUCFhR9WZHAZHUOX7QVl0IEhwESpQJSSP7wkSlzYpn2ITJM5Dmr1W1pp1zVen_RltVG7IDjFHeki7Km0aOMKQvVqgEHD7','APA91bFipz0dWoapHEgFR4DMy-J0DkRUIkyD3NLWMm-2d56VNpAmXL7Rj_DypRC9TXcLCwl9U2lNvXoEiGYvlFbwb9dW4ZqSgsm-4jr3Hic0oWg7jQHzfQYNqENxlZXRta-27OCe4vSk','APA91bHlZqiGPzFmspkGdQGq5vnpCnqLZ_pE2YeGJJ97A3nogNHVYAKq1-mW1EGASCa84enbsJTfxHtphrN0oUn-A0_Fwkyu9KLaz8hpnrBVtnLVSe9UMHtv9mEe8jrn-57ODuKwJJib','APA91bFxbuRS7Sx3mZauGSzjG8HYwMxsa3qgLstwlA9lWD66m4u-8u-4Lg6AhhKIajiP53XYJXqa-Wr35VXC7ZDsbFYYYvfclPAQSovHKtUcaWVW4w7ZupEUyls6cT8yIojVaRv0qn3c','APA91bGDPgyZUEu6-F2omXlOGATY1sPI58PzaLfq8bCwM5svUar9yzWWJt09v2qVU67mMbbjj10NhlQophZBOoELCUGA5NSs6a5Xc89aEXPo49hqmoJqut4hqH1jGe_Cgud2t1yexi49','APA91bFXupDxb7rcfMeIOW5caURf4MMUoV0j1jd4UQf0gJev99IRzYjdUoN6KY5hEyT1ss2jUmLc_ZTJMIK3qBBvFYpa8LfLH025ZMzhAISahASprdbun0bdvgvDivjqVDZGKEiJMx5L','APA91bHxkjYtCIPO4y31IzebV_F4bAbONBDTpMzoZmHrgBJGehtr7WN0-K7Vn734pUF8fdom0fQTjo5QJDHU0pgEYUte_JHsfAGfUehjSz0gwbsSBq7om7YPOrGcccCRbPRpSGksnCmr','APA91bFik4KeLYHgcTvL7zX6Tw2-_EkMt_9v-kukPJ3OBsAKOvz3k-C6X6l8mR_Uz3Ah3K6a9W-qcO5P6mD_LZ7nZ7fgv_RiGzk1HPA4o6uRAUbyz8C2BjUZmZ2O-FDPJrkE8lJqbm-f','APA91bEXCge0X8yowt52Xh23xguJyqpnVRN8x2HlB9ycpHIDtBAsAzc4I552utWA1WFeiMrJr66ewUCHVh9lH2mHOe1_sSsZgNDjaxGgxIHOnvG5c84s-7pKBd2nmJdUrLwb_k9RxtGV','APA91bGo5baDHmUYK1zRA5jttVI9mK71yuy7w0DQqSKjTKjBjuxtPVZPf_i_NU4aVb5p4fvIClhmdDtDxeQXg-1M4mdGim7fWa3gYvCCBDw1sRQL0X1mAJkcCKmW5c-uK4fY_0PeCmwI','APA91bHjrK1mBkdUWZKBnBb7kWGjIYoGowvKOArXOk2aEpKT57TmWng3KJ_qiTSRsX9SdUTdnNEddsQwVHaHKHwmJPvmGuMjTVBdw9zRy8XfGSCg_f5GBV84s59h3RmNKZe2XA0xBjsFl-OwFX-xc8GtuvJM9aEPSg','APA91bF3XDKheR37c1HsduQYSVK8pn5TbuOCilTB2nlQJWmtBFaOBA3eY5MyKrc5WKs9Oc-VKT4kF6-zOLfDg9NKixHfUJ8QKMQ_rh7NdpFR4BtZ8P7HPdGGo7dqVyvP6ogchUTrnul6','APA91bHv9MsTlTEhvWX78VpoEsVW4Zorb51Gj4xHxh1cB4XDbCBa-JLZmiSqH1J9Y5HnlAZDRSLNPXCN9BBf00oUW3w0faoNPvPH2xzdlKWDESLXCLaqMFVtdi__El47sZydDwJX-9T2','APA91bE7IPolrmD2sdG-v3Mc6z0ai-w9gVcLehu6e_KSdWkdO-B3Y3iksF_pp7synn7uD5zha5Bq-oGIkNxgAhJ9oCGTimV5X1MuOLe_QW9DLt0CrapDUm502tpn9ZPEVngM86e3xPbd','APA91bHWJlGDF3sytQsyLXYhvhMrFjbwmhmCyHGzNg3GvCEGRHIlPC2neYx_5i4me-R8zt8sQZLF5_HAVxCe5kJraE55I6leCGG09tGOe3AmeV40f4Lg1bNJj2vv683-XAyz0aMJ-Vlf','APA91bGwpHXYgrW1iYjcxVLs6oW87z_njT2Wn9CxRdx1X9_JapT4Fypt9GmvwkOaCPedQTU8JNu_bmq73PVtXbUEnPFJrHLVMXi-gSjQB8A2Ygkm_fJau8oiFK1M7D46_aBS7NcyYmoe','APA91bG6xp2v0fKzmdqikpb9QMksz35zFgJ4ssDcANuiUsPitmf-NiuSDlH9ECOmkfuSqaU3PqwC8Uvxmomdp6Uor-dBkorvpNmGcOR_JQJUkjfo4s19rSy-FWmpTg4D5wdFOpa9tcP9','APA91bE4Zbz0NSbTQ9GimrjU5Mm2UIPZUzU4ny_WCxIcnfej_bNK-G1aPx4weiUD25FhnJM2HsazPfze7Gv6dtkSffoTGYoPtuewAaFC5ExPSe1s4hLC1-6Hpw0AD_pz6mIkC9MN9dW5','APA91bHQ7N4JXO3En697HLGedkw5nNpA_-5MJzqt3G9xGW4Fg5gKf5XjL4m_rRyYBuV9_-h_zfMvVFvViK4tr8qsaHu5wiyQrtL7hkOq2qojvtXEYlAfruCi3fK_mEBZSd75mzowFaoN','APA91bGyQeosXk2SHssUYhvblMorgEhO3p7JzCtzlE9yOmK9r3EUGwAe7Hsenoxj-N81UM69bSBV8BmP9myUJ9df_P4kmsOS-Qcj77932eaPLDboFQp5IxvZD8QU1mujvYY_cMmsrtW0','APA91bFwI3JS_j_C3x2DaCAJsqiP_2lCDv3EDQjNMx4o8EW6IczDQ9CA2UBDo7S9k0wdx0lZHSC9IBVhBX29jnNbR1UIhgxh5bSryXXM4Ojb3_FBRU7oL8YiypsT2R0utMieFOYwr7lH','APA91bFDx5_TLm11CmqjBlwU14BiAlyl6DHeU0W--KjUfjwqYnaOvFxuKSXBbtOBbWlZXv-YnxCFTlYsGGv2GwZ0Aaj4Qeg6pXjLLJaNu19TtcaH8U1lqk6l0ySIF7PCcFh1j_8mJ3TX','APA91bGNOxZjoly8cGjYUTemQwZUZIOVS5WW4vvhnpLOyQiM8tYhxBFcqbJ0nzP-7Vt0cgT5rXT02JZ0gww5g3Ps3A7J0F7edAKUAepoFY01u_7yTU_9VrWTxECSH0De5qgMy9Ie_SJP','APA91bElD4NGDFOOPtYvFYYeGWL0kkqy2fstnanZcY92Hf-mnRrpblIQBcsGELONzCBopYWtS3ULuHxwur8NVeDlvrjAqe0NvdzYE0IwEKoG0xgQj6i6ls5PFfhhtx4_q6GHQG25NCgE','APA91bFz2Y833gBPgH5Og9OmpSAIdYXT12mUHi7nsQH58drtlaDcl8q7fJ9oX7kaRXmQJMS9TBlM4f8SyprE7iuYtZI_aHfCUFs_MRoIaZVF84IoWvCMR_x8fzRl2bXK4SmeevaAK9vK','APA91bFJU9mROVxgn-iJ6di7YbaMczpnLFu3liyyP8Jm667UxCeE5pZ8cC_tuiogjDeJJp0jSy9QG1AJgycb4QpNHmclw2uVCtCsyGnCe5PQM6sWW0kK88vUfM5KjELKTTp61F30yeBm','APA91bFCVmkwW4OME2bekYcsDq_ykhoQTkB50WmLo-yw8K_BJG30-9Qi5DSh1J3g2Ycu8e4xiBcHfTRs61uEh-CgnFmXvr6xPzlmZAHIcquB3P27ZmNktdxj2_3hjMHHYQU1-xmYrCKE','APA91bGS1YntjJ5yv_uBHjjtJ05J_aM13EzzYWQN0Oa9JIelJepgqLlsTHwokbSoz0ZYKgqiHXZezN0HTkkWiS5TFDfsLfSsE3K5oP5icRsfZ8yIjB7qk0Dmz43HcD_t_wi54IRHNIH-','APA91bHJmynL1B2qO3LTVnnkY9-JkHRd05lVyGp9LFgrGcA3CzJHnNogxIEMMw_VOU2gzbvdboePMBD2iZ-L4If_X5lFORl9FgMykcB5fQeRjCrQrcTLB2cD7YMwTy125LSEC-D7sRXHB6g4NxFs4xxnziXE6X2gJA','APA91bH98H0lTK7EcxqW22ohLKohzXQ1TkeaSJzDrkNBxy9BFq9abHBKHRPqPPkusPWrWInmgvpXzcp2-3GjiOdSi91h_iw5MzYNqolA_9KnHikOnb8bhqdTgHeNjXVM7PqzdXXGbzWQ','APA91bEMbrTzWqgF9jmdwVvhtrExVDXY_AuNpzWI6hvW3LHMvG-Lur52UJ7qTNicJlSMZG-AVYxS0Ds-ZswNz2qlwf0S131ThkBoLBRP24CQVU4tK4RPsRm3xfSTABeSCJi0m2sHoOOP','APA91bGQZlchyglDEHAl_wDzAGpAXbRHd3eg5iWGHYx3CBF1r1s0AceeFllFd8BNP0xj4aidf5wHHiQ6btuqKR-UV34xTLR5WAzGIFbnsQIehtrUQBTPsZ4QLgHvs_ag8uFMH2CllS9L'];
// At least one reg id required
//registrationIds.push('APA91bE-hdr4FVIUolrTCwqc6SU0VO5jWiA0GOdD6f6aoaukBtOqf-__Kme4SVqNKealhMFYC61_luFqTOIeGBkpSUJfZVRS9WurECS1qxdh9PphctGIG79oWlC76DV7pVm1UQLgu5gfqoG3BygfvMVkJrKdt9U3TA');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
   console.log(registrationIds);
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});