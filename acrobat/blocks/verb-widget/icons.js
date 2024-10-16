// icons.js

// Object mapping icon names to SVG strings
const ICONS = {
  WIDGET_ICON: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0.3 24 23.4"><g id="Surfaces"><path fill="#b30b00" d="M4.25.3h15.5A4.24643,4.24643,0,0,1,24,4.55v14.9a4.24643,4.24643,0,0,1-4.25,4.25H4.25A4.24643,4.24643,0,0,1,0,19.45V4.55A4.24643,4.24643,0,0,1,4.25.3Z"/></g><g id="Outlined_Mnemonics_Logos" data-name="Outlined Mnemonics Logos"><path id="_256" data-name=" 256" fill="#fff" d="M19.3,13.85a1.78946,1.78946,0,0,0-.44031-.33547,2.83828,2.83828,0,0,0-.59969-.24078,4.79788,4.79788,0,0,0-.75719-.14516A7.94332,7.94332,0,0,0,16.59,13.08q-.27375.00375-.54891.017-.27492.01337-.54984.03672-.2747.02345-.548.05734-.273.034-.54328.07891-.1725-.16875-.33891-.345-.16617-.17625-.32484-.36-.15844-.18375-.308-.375-.1493-.19125-.28828-.39-.10875-.14625-.212-.29625-.10337-.15-.20172-.30375-.09845-.15375-.19234-.31125-.094-.1575-.18391-.31875.17625-.55125.30766-1.04813.13148-.49688.21859-.93937.08718-.4425.13047-.83063A6.52908,6.52908,0,0,0,13.05,7.03a3.675,3.675,0,0,0-.08594-.80563A2.42373,2.42373,0,0,0,12.685,5.505a1.4927,1.4927,0,0,0-.50406-.51688A1.44959,1.44959,0,0,0,11.42,4.79a1.19728,1.19728,0,0,0-.30547.04719A1.22057,1.22057,0,0,0,10.41,5.38a2.17839,2.17839,0,0,0-.25078.82187,4.69881,4.69881,0,0,0,.007,1.08813,7.85466,7.85466,0,0,0,.25641,1.26812A10.26146,10.26146,0,0,0,10.92,9.92c-.0725.2125-.14625.42312-.222.63391s-.1536.42171-.23422.63484-.16406.42844-.25109.648S10.035,12.28,9.94,12.51q-.12375.2925-.25344.58281Q9.55672,13.383,9.42,13.67q-.13688.28688-.28156.56969Q8.99359,14.52235,8.84,14.8c-.3075.1225-.70125.28937-1.12281.49156A12.99444,12.99444,0,0,0,6.4275,15.995a6.08618,6.08618,0,0,0-1.10594.86094A1.9673,1.9673,0,0,0,4.75,17.82a1.08624,1.08624,0,0,0-.01969.29219,1.10366,1.10366,0,0,0,.05719.28281,1.13932,1.13932,0,0,0,.12844.26031A1.17812,1.17812,0,0,0,5.11,18.88a1.45543,1.45543,0,0,0,.23312.17047,1.49272,1.49272,0,0,0,.25938.12078,1.5496,1.5496,0,0,0,.27812.07016A1.60815,1.60815,0,0,0,6.17,19.26a2.26684,2.26684,0,0,0,1.16953-.36984,5.403,5.403,0,0,0,1.12172-.95391,11.55912,11.55912,0,0,0,1.02609-1.30453c.32078-.46734.61766-.95422.88266-1.42172q.225-.075.45172-.14781.22664-.07266.45453-.14219.22781-.06938.45641-.13469.22851-.06515.45734-.12531.25125-.0675.49687-.12766.24562-.06022.48563-.11359.24-.05343.47437-.10047.23438-.0471.46313-.08828a7.87389,7.87389,0,0,0,1.20266.87266,6.26924,6.26924,0,0,0,1.08359.50609,5.254,5.254,0,0,0,.913.23422A4.37649,4.37649,0,0,0,18,15.9a2.59368,2.59368,0,0,0,.65125-.07453A1.51031,1.51031,0,0,0,19.1,15.63375a1.1277,1.1277,0,0,0,.28375-.26109A1.11325,1.11325,0,0,0,19.54,15.09a1.22521,1.22521,0,0,0,.068-.32313,1.25587,1.25587,0,0,0-.12281-.63875A1.23791,1.23791,0,0,0,19.3,13.85Zm-1.09.76a.5154.5154,0,0,1-.08641.19734.58489.58489,0,0,1-.16234.15141.79481.79481,0,0,1-.228.097A1.1248,1.1248,0,0,1,17.45,15.09c-.03,0-.05937-.00062-.08828-.002s-.05734-.00359-.08547-.00672-.05594-.00719-.08359-.01234S17.1375,15.0575,17.11,15.05a4.95589,4.95589,0,0,1-.55719-.16906,5.26538,5.26538,0,0,1-.54781-.23844,5.88716,5.88716,0,0,1-.54031-.30969q-.26859-.173-.53469-.38281.19875-.03.39938-.0525t.40312-.0375q.2025-.015.40688-.0225T16.55,13.83q.135-.00375.27-.00015.135.00351.27.0139.135.01032.27.027.135.01665.27.03922a1.06557,1.06557,0,0,1,.23406.06438.67592.67592,0,0,1,.20594.12812.47151.47151,0,0,1,.13094.20688A.61536.61536,0,0,1,18.21,14.61ZM11.05,5.76a.44669.44669,0,0,1,.06312-.08922.418.418,0,0,1,.08188-.06953.38563.38563,0,0,1,.09687-.04516A.37033.37033,0,0,1,11.4,5.54a.3585.3585,0,0,1,.23219.07781.49431.49431,0,0,1,.14031.19969,1.11421,1.11421,0,0,1,.06906.27094A2.13908,2.13908,0,0,1,11.86,6.38a4.75269,4.75269,0,0,1-.03313.52266c-.02187.19453-.05437.408-.09687.63609s-.095.47094-.15688.72422S11.44,8.78,11.36,9.05a8.57492,8.57492,0,0,1-.34656-1.17359,5.96418,5.96418,0,0,1-.13094-.95516,3.50469,3.50469,0,0,1,.03031-.71328A1.38226,1.38226,0,0,1,11.05,5.76Zm.91,8.03q-.12375.03375-.2475.06766-.12375.034-.2475.06859-.12375.03468-.2475.07047-.12375.03585-.2475.07328.0675-.135.13125-.26813t.12375-.26437q.06-.13125.11625-.26063T11.45,13.02q.0675-.16875.13469-.33578.067-.16711.13281-.333.06563-.16595.12906-.33109.06329-.16524.12344-.33016.0525.0825.10516.16328.05272.08087.10609.16047.05343.07968.108.15859.0546.079.11078.15766.10875.15.21969.29625.11109.14625.22531.28875.11438.1425.23281.28125.11859.13875.24219.27375a1.28474,1.28474,0,0,0-.14922.02891c-.09234.02015-.22016.04922-.362.08234s-.29781.07031-.44641.10672S12.0725,13.76,11.96,13.79Zm-3.51,2c-.2525.405-.50375.7725-.74766,1.09594a8.70907,8.70907,0,0,1-.70359.83156,3.63,3.63,0,0,1-.623.52781A.99041.99041,0,0,1,5.87,18.43a.43094.43094,0,0,1-.06875-.00563.4412.4412,0,0,1-.06875-.01687.4004.4004,0,0,1-.065-.02813A.33419.33419,0,0,1,5.61,18.34a.384.384,0,0,1-.07094-.07609.36982.36982,0,0,1-.06687-.18969A.38084.38084,0,0,1,5.48,17.97a1.11708,1.11708,0,0,1,.27422-.47844,3.84739,3.84739,0,0,1,.61453-.54406,8.74359,8.74359,0,0,1,.91266-.57781C7.63063,16.175,8.0225,15.98,8.45,15.79Z"/></g></svg>',
  fillsign: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240"><g id="Group_310663" data-name="Group 310663"><path id="Path_101359" data-name="Path 101359" d="M11.587,0H139.758a11.832,11.832,0,0,1,11.587,12.062v95.975A11.832,11.832,0,0,1,139.758,120.1H11.587A11.832,11.832,0,0,1,0,108.037V12.062A11.832,11.832,0,0,1,11.587,0Z" transform="translate(144.1 60.322) rotate(90)" fill="#fee"/><path id="Path_101389" data-name="Path 101389" d="M351.36,421.1v52.063a13.907,13.907,0,0,1-13.885,13.922H247.365a13.907,13.907,0,0,1-13.885-13.922V355.01a13.907,13.907,0,0,1,13.885-13.921h68.276a15.262,15.262,0,0,1,10.76,4.446l20.445,20.336a15.336,15.336,0,0,1,4.513,10.871v17.5" transform="translate(-187.236 -297.089)" fill="#fff" stroke="#cacaca" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/><path id="Path_101390" data-name="Path 101390" d="M13.777,0A13.775,13.775,0,0,0,0,13.776V132.42A13.778,13.778,0,0,0,13.78,146.2h91.838a13.777,13.777,0,0,0,13.777-13.777V34.9a11.565,11.565,0,0,0-3.4-8.129L92.484,3.35A11.343,11.343,0,0,0,84.4,0Z" transform="translate(219.866 61.261)" fill="#fee" style="isolation: isolate"/><g id="Group_156101" data-name="Group 156101" transform="translate(239.982 44)"><path id="Path_101552" data-name="Path 101552" d="M0,132.079V13.921A13.906,13.906,0,0,1,13.888,0h68.28A15.262,15.262,0,0,1,92.929,4.446L113.37,24.782a15.333,15.333,0,0,1,4.513,10.87v96.427A13.906,13.906,0,0,1,104,146H13.888A13.906,13.906,0,0,1,0,132.079Z" transform="translate(0)" fill="#f1eff8"/><path id="Path_101552_-_Outline" data-name="Path 101552 - Outline" d="M103.985,148H13.9A15.919,15.919,0,0,1-2,132.063V13.934A15.919,15.919,0,0,1,13.9-2H82.161A17.274,17.274,0,0,1,94.342,3.032l20.435,20.331a17.346,17.346,0,0,1,5.106,12.3v96.4A15.919,15.919,0,0,1,103.985,148ZM13.9,2.034a11.885,11.885,0,0,0-11.867,11.9V132.066a11.885,11.885,0,0,0,11.87,11.9h90.079a11.885,11.885,0,0,0,11.867-11.9V35.661a13.312,13.312,0,0,0-3.918-9.439L91.5,5.891A13.24,13.24,0,0,0,82.16,2.034Z" transform="translate(0)" fill="#7e4fc5"/></g><g id="Group_160019" data-name="Group 160019" transform="translate(153.795 121.259) rotate(-90)"><path id="Line_6851" data-name="Line 6851" d="M0,47.338a2,2,0,0,1-2-2V0A2,2,0,0,1,0-2,2,2,0,0,1,2,0V45.338A2,2,0,0,1,0,47.338Z" transform="translate(11.906)" fill="#cacaca"/><path id="Line_6854" data-name="Line 6854" d="M11.117,11.883a1.992,1.992,0,0,1-1.328-.505L-1.329,1.495a2,2,0,0,1-.166-2.824,2,2,0,0,1,2.824-.166L12.447,8.388a2,2,0,0,1-1.329,3.495Z" transform="translate(0 35.594)" fill="#cacaca"/><path id="Line_6855" data-name="Line 6855" d="M0,11.744a2,2,0,0,1-1.531-.711,2,2,0,0,1,.241-2.818L10.277-1.53a2,2,0,0,1,2.818.241,2,2,0,0,1-.241,2.818L1.289,11.274A1.992,1.992,0,0,1,0,11.744Z" transform="translate(11.906 35.594)" fill="#cacaca"/></g><g id="Group_155517" data-name="Group 155517" transform="translate(191.706 30.614)"><path id="Line_6847" data-name="Line 6847" d="M0,8.567a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V7.067A1.5,1.5,0,0,1,0,8.567Z" transform="translate(11.386)" fill="#0d66d0"/><path id="Line_6848" data-name="Line 6848" d="M0,8.567a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V7.067A1.5,1.5,0,0,1,0,8.567Z" transform="translate(11.386 15.705)" fill="#0d66d0"/><path id="Line_6850" data-name="Line 6850" d="M0,8.567a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V7.067A1.5,1.5,0,0,1,0,8.567Z" transform="translate(22.771 11.386) rotate(90)" fill="#0d66d0"/><path id="Line_6849" data-name="Line 6849" d="M0,8.567a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V7.067A1.5,1.5,0,0,1,0,8.567Z" transform="translate(7.067 11.386) rotate(90)" fill="#0d66d0"/></g><g id="Group_155518" data-name="Group 155518" transform="translate(360.363 205.011) rotate(-1)"><path id="Line_6847-2" data-name="Line 6847" d="M0,5.108a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V3.608A1.5,1.5,0,0,1,0,5.108Z" transform="translate(7.375)" fill="#6bbcb3"/><path id="Line_6848-2" data-name="Line 6848" d="M0,5.108a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V3.608A1.5,1.5,0,0,1,0,5.108Z" transform="translate(7.375 11.142)" fill="#6bbcb3"/><path id="Line_6850-2" data-name="Line 6850" d="M0,5.108a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V3.608A1.5,1.5,0,0,1,0,5.108Z" transform="translate(14.75 7.375) rotate(90)" fill="#6bbcb3"/><path id="Line_6849-2" data-name="Line 6849" d="M0,5.108a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V3.608A1.5,1.5,0,0,1,0,5.108Z" transform="translate(3.608 7.375) rotate(90)" fill="#6bbcb3"/></g><g id="Group_155519" data-name="Group 155519" transform="translate(226.3 19.5)"><path id="Line_6847-3" data-name="Line 6847" d="M0,4.36a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V2.86A1.5,1.5,0,0,1,0,4.36Z" transform="translate(5.846)" fill="#c871a4"/><path id="Line_6848-3" data-name="Line 6848" d="M0,4.36a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V2.86A1.5,1.5,0,0,1,0,4.36Z" transform="translate(5.846 8.832)" fill="#c871a4"/><path id="Line_6850-3" data-name="Line 6850" d="M0,4.36a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V2.86A1.5,1.5,0,0,1,0,4.36Z" transform="translate(11.692 5.846) rotate(90)" fill="#c871a4"/><path id="Line_6849-3" data-name="Line 6849" d="M0,4.36a1.5,1.5,0,0,1-1.5-1.5V0A1.5,1.5,0,0,1,0-1.5,1.5,1.5,0,0,1,1.5,0V2.86A1.5,1.5,0,0,1,0,4.36Z" transform="translate(2.86 5.846) rotate(90)" fill="#c871a4"/></g><path id="Path_8" data-name="Path 8" d="M89,130h46.48v9.786H89Z" transform="translate(-19.537 -56.197)" fill="#cacaca"/><path id="Path_9" data-name="Path 9" d="M89,137h46.48v9.786H89Z" transform="translate(-19.537 -46.073)" fill="#cacaca"/><path id="Path_10" data-name="Path 10" d="M89,144h46.48v9.786H89Z" transform="translate(-19.537 -35.949)" fill="#cacaca"/><g id="Group_2" data-name="Group 2" transform="translate(70.546 143.566)"><path id="Line_8" data-name="Line 8" d="M16.3,17.389a1.088,1.088,0,0,1-.772-.32L-1.18.364a1.092,1.092,0,0,1,0-1.544,1.092,1.092,0,0,1,1.544,0L17.069,15.525a1.092,1.092,0,0,1-.772,1.864Z" transform="translate(1.5 1.5)" fill="#864ccc"/><path id="Line_9" data-name="Line 9" d="M-.408,17.982a1.088,1.088,0,0,1-.772-.32,1.092,1.092,0,0,1,0-1.544l17.3-17.3a1.092,1.092,0,0,1,1.544,0,1.092,1.092,0,0,1,0,1.544l-17.3,17.3A1.088,1.088,0,0,1-.408,17.982Z" transform="translate(1.5 1.5)" fill="#864ccc"/></g><path id="Line_10" data-name="Line 10" d="M59.908.683H-.408A1.092,1.092,0,0,1-1.5-.408,1.092,1.092,0,0,1-.408-1.5H59.908A1.092,1.092,0,0,1,61-.408,1.092,1.092,0,0,1,59.908.683Z" transform="translate(70.911 172.063)" fill="#864ccc"/><path id="Path_101160" data-name="Path 101160" d="M89,130h46.576v9.806H89Z" transform="translate(173.729 -55.899)" fill="#864ccc" opacity="0.478"/><path id="Path_101161" data-name="Path 101161" d="M89,137h46.576v9.806H89Z" transform="translate(173.729 -45.74)" fill="#864ccc" opacity="0.478"/><path id="Path_101162" data-name="Path 101162" d="M89,144h46.576v9.806H89Z" transform="translate(173.729 -35.58)" fill="#864ccc" opacity="0.478"/><g id="Group_6" data-name="Group 6" transform="translate(262.355 144.009)"><path id="Line_11" data-name="Line 11" d="M16.333,17.427a1.09,1.09,0,0,1-.773-.32L-1.18.367a1.094,1.094,0,0,1,0-1.547,1.094,1.094,0,0,1,1.547,0L17.106,15.56a1.094,1.094,0,0,1-.773,1.867Z" transform="translate(1.5 1.5)" fill="#864ccc"/><path id="Line_12" data-name="Line 12" d="M-.406,18.021a1.09,1.09,0,0,1-.773-.32,1.094,1.094,0,0,1,0-1.547L16.154-1.18a1.094,1.094,0,0,1,1.547,0,1.094,1.094,0,0,1,0,1.547L.367,17.7A1.09,1.09,0,0,1-.406,18.021Z" transform="translate(1.5 1.5)" fill="#864ccc"/></g><path id="Line_13" data-name="Line 13" d="M82.327.688H-.406A1.094,1.094,0,0,1-1.5-.406,1.094,1.094,0,0,1-.406-1.5H82.327A1.094,1.094,0,0,1,83.421-.406,1.094,1.094,0,0,1,82.327.688Z" transform="translate(262.718 172.562)" fill="#864ccc"/><g id="Group_155670" data-name="Group 155670" transform="translate(291.447 111.127)"><path id="Path_101221" data-name="Path 101221" d="M87.208,153.892l30.5-33.17-.039-.089a3.623,3.623,0,0,0-.179-.33l-.078-.128a13.76,13.76,0,0,0-2.023-2.342,14.923,14.923,0,0,0-2.484-1.959,4.523,4.523,0,0,0-.621-.316l-.06-.022L81.172,148.352Z" transform="translate(-72.313 -112.839)" fill="#e5dcf4" style="isolation: isolate"/><path id="Path_101220" data-name="Path 101220" d="M111.953,163.9a3.526,3.526,0,0,1-1.016-.146,2.207,2.207,0,0,1-1.475-1.334,2.912,2.912,0,0,1-.015-1.864c-.475.276-.944.54-1.4.786-2.9,1.575-4.035,1.77-4.846,1.578a1.7,1.7,0,0,1-1.119-.878,2.328,2.328,0,0,1-.176-1.476c-.385.287-.792.568-1.22.835a12.486,12.486,0,0,1-6.625,2.07,3.021,3.021,0,0,1-1.079-.19,1.459,1.459,0,0,1-.72.19H71.458a1.458,1.458,0,0,1-1.339-2.036l6.63-15.388a1.458,1.458,0,0,1,.278-.424c30.912-32.777,31.215-33.024,31.4-33.172a2.3,2.3,0,0,1,2.339-.259,7.848,7.848,0,0,1,1.776.944A20.539,20.539,0,0,1,116,116.19a11.313,11.313,0,0,1,1.68,2.3c.831,1.617.3,2.561-.118,2.995L87.117,154.639a1.458,1.458,0,0,1-2.148-1.973L115.1,119.854a11.459,11.459,0,0,0-2.27-2.731,11.79,11.79,0,0,0-2.851-2.11c-1.566,1.622-8.543,8.98-30.653,32.423l-5.651,13.116H91.185a7.012,7.012,0,0,1,.143-1.857,13.753,13.753,0,0,1,.962-2.9,12.327,12.327,0,0,1,3.629-4.873,3.2,3.2,0,0,1,4.008-.155,3.267,3.267,0,0,1,1.354,2.667c0,1.317-.739,2.794-2.255,4.515A27.12,27.12,0,0,1,96.984,160a11.9,11.9,0,0,0,2.161-1.076,17.577,17.577,0,0,0,4.154-3.71,6.447,6.447,0,0,1,.609-.665,1.549,1.549,0,0,1,2.646,1.432,4.621,4.621,0,0,1-.181.639c-.135.391-.338.894-.553,1.426-.186.462-.391.97-.57,1.451.445-.21,1.01-.5,1.723-.892,1.6-.884,3.393-2,4.939-2.971q.056-.035.115-.065a2.049,2.049,0,0,1,.554-.2,1.537,1.537,0,0,1,1.424.458,1.564,1.564,0,0,1,.318,1.579,3.173,3.173,0,0,1-.229.526c-.142.27-.337.587-.562.954-.312.509-.667,1.086-.938,1.632-.071.143-.129.269-.176.378a4.31,4.31,0,0,0,.91-.441,17.011,17.011,0,0,0,3.388-3.053,1.458,1.458,0,1,1,2.167,1.953,19.482,19.482,0,0,1-4.024,3.583A5.613,5.613,0,0,1,111.953,163.9ZM98.119,153.06a1.47,1.47,0,0,0-.7.38,7.512,7.512,0,0,0-1.44,1.676,13.293,13.293,0,0,0-1.564,3.27,26.763,26.763,0,0,0,2.422-2.367c1.416-1.607,1.527-2.389,1.527-2.59,0-.092,0-.187-.212-.349a.205.205,0,0,0-.03-.02Z" transform="translate(-70 -112.001)" fill="#864ccc"/></g></g><rect id="Rectangle_248074" data-name="Rectangle 248074" width="400" height="240" opacity="0"/></svg>',
  UPLOAD_ICON: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 33 33"><g clip-path="url(#a)"><path fill="#fff" d="M32.077 19.164a6.87 6.87 0 0 1-2.027 4.893 6.877 6.877 0 0 1-4.893 2.026h-1.05a1.198 1.198 0 0 1 0-2.396h1.05c1.208 0 2.344-.47 3.199-1.325a4.49 4.49 0 0 0 1.325-3.198 4.463 4.463 0 0 0-1.245-3.102 4.521 4.521 0 0 0-3.038-1.392 1.2 1.2 0 0 1-.998-1.75c.2-.385.355-.782.458-1.18.11-.414.165-.84.165-1.264A5.31 5.31 0 0 0 23.459 6.7c-1.93-1.928-5.265-2.035-7.296-.225a5.374 5.374 0 0 0-1.747 3.31 1.197 1.197 0 0 1-1.685.936 4.268 4.268 0 0 0-.825-.28 4.077 4.077 0 0 0-3.75 1.057 3.831 3.831 0 0 0-1.091 3.556c.055.253.138.504.244.744A1.198 1.198 0 0 1 6.29 17.48a3.127 3.127 0 0 0-2.072.968 3.076 3.076 0 0 0-.847 2.123c0 .833.325 1.616.914 2.205a3.098 3.098 0 0 0 2.203.912h3.354a1.198 1.198 0 0 1 0 2.396H6.488a5.476 5.476 0 0 1-3.897-1.614 5.475 5.475 0 0 1-1.615-3.9c0-1.41.534-2.749 1.503-3.772a5.511 5.511 0 0 1 2.208-1.421 6.208 6.208 0 0 1 1.795-5.595 6.47 6.47 0 0 1 5.872-1.697 7.766 7.766 0 0 1 2.215-3.398 7.674 7.674 0 0 1 5.113-1.948 7.69 7.69 0 0 1 5.471 2.266 7.69 7.69 0 0 1 2.266 5.471 7.345 7.345 0 0 1-.3 2.073 6.91 6.91 0 0 1 3.048 1.856 6.85 6.85 0 0 1 1.91 4.759Z"/><path fill="#fff" d="m22.677 17.815-4.796-4.787a1.198 1.198 0 0 0-1.693 0L11.4 17.816a1.198 1.198 0 1 0 1.694 1.694l2.75-2.751v13.07a1.198 1.198 0 0 0 2.396 0V16.772l2.744 2.739a1.199 1.199 0 0 0 1.692-1.696Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.55.528h31.943v31.943H.55z"/></clipPath></defs></svg>',
  SECURITY_ICON: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42"><g fill="none" fill-rule="evenodd"><path fill="#8E8E8E" fill-rule="nonzero" d="M21.5006559,6 L33.9986881,10.1630417 L34,20.1773333 C34,27.8265833 28.9100068,34.6259167 21.5006559,37 C14.123138,34.6858984 9.16213086,28.0099101 9.00389527,20.4144132 L9,20.0520417 L9,10.165625 L21.5006559,6 Z M21.4999997,7.581 L10.4999997,11.246 L10.4999997,20.0510254 C10.5046599,26.9292654 14.8030505,33.0037194 21.2726644,35.3404771 L21.496,35.418 L21.7168055,35.3398823 C28.0480726,33.0130596 32.3496907,27.1255801 32.4961403,20.5253563 L32.4999997,20.1773333 L32.498,11.244 L21.4999997,7.581 Z"></path><path fill="#FA0F00" fill-rule="nonzero" d="M27.705263,16.4844793 C27.9899772,16.1836294 28.4646708,16.1705488 28.7655207,16.455263 C29.0390206,16.7140941 29.0746947,17.1299329 28.8650105,17.4294339 L28.794737,17.5155207 L20.535541,26.2427934 C20.2781341,26.5147885 19.8650957,26.5517706 19.5656859,26.3452708 L19.4795411,26.2760079 L15.7387371,22.7906577 C15.4356791,22.508295 15.4189022,22.0337178 15.7012648,21.7306597 C15.9579582,21.4551524 16.3735066,21.416241 16.6746314,21.6235864 L16.7612629,21.6931874 L19.957,24.671 L27.705263,16.4844793 Z"></path></g></svg>',
  INFO_ICON: '<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.50005 7.0748C10.0938 7.0748 10.575 6.59351 10.575 5.9998C10.575 5.4061 10.0938 4.9248 9.50005 4.9248C8.90634 4.9248 8.42505 5.4061 8.42505 5.9998C8.42505 6.59351 8.90634 7.0748 9.50005 7.0748Z" fill="#222222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M10.667 12H10.5V8.2C10.5 8.14696 10.4789 8.09609 10.4414 8.05858C10.4039 8.02107 10.353 8 10.3 8H8.333C8.333 8 7.75 8.016 7.75 8.5C7.75 8.984 8.333 9 8.333 9H8.5V12H8.333C8.333 12 7.75 12.016 7.75 12.5C7.75 12.984 8.333 13 8.333 13H10.667C10.667 13 11.25 12.984 11.25 12.5C11.25 12.016 10.667 12 10.667 12Z" fill="#222222"/><path fill-rule="evenodd" clip-rule="evenodd" d="M9.50005 1.0498C7.92769 1.0498 6.39064 1.51606 5.08327 2.38962C3.7759 3.26318 2.75693 4.5048 2.15521 5.95747C1.55349 7.41014 1.39606 9.00862 1.70281 10.5508C2.00956 12.0929 2.76673 13.5095 3.87855 14.6213C4.99038 15.7331 6.40694 16.4903 7.94908 16.797C9.49123 17.1038 11.0897 16.9464 12.5424 16.3446C13.9951 15.7429 15.2367 14.724 16.1102 13.4166C16.9838 12.1092 17.4501 10.5722 17.4501 8.9998C17.4501 6.89133 16.6125 4.86922 15.1216 3.37831C13.6306 1.88739 11.6085 1.0498 9.50005 1.0498ZM9.50005 15.9558C8.12429 15.9558 6.77941 15.5478 5.63551 14.7835C4.4916 14.0192 3.60003 12.9328 3.07355 11.6618C2.54706 10.3907 2.40931 8.99209 2.67771 7.64276C2.94611 6.29342 3.6086 5.05398 4.58142 4.08117C5.55423 3.10836 6.79367 2.44586 8.143 2.17746C9.49234 1.90906 10.891 2.04682 12.162 2.5733C13.433 3.09978 14.5194 3.99135 15.2838 5.13526C16.0481 6.27917 16.4561 7.62404 16.4561 8.9998C16.4561 10.8447 15.7232 12.6139 14.4187 13.9184C13.1142 15.2229 11.3449 15.9558 9.50005 15.9558Z" fill="#222222"/></svg>',
  CLOSE_ICON: '<svg width="41" height="32" viewBox="0 0 41 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0H0V32H1V0Z" fill="white" fill-opacity="0.2"/><g clip-path="url(#clip0_9233_2798)"><g clip-path="url(#clip1_9233_2798)"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.2379 15.9994L28.6941 13.5434C28.8583 13.3793 28.9506 13.1566 28.9507 12.9245C28.9507 12.6923 28.8585 12.4696 28.6944 12.3054C28.5303 12.1412 28.3076 12.0489 28.0754 12.0488C27.8432 12.0488 27.6205 12.141 27.4563 12.3051L24.9999 14.7615L22.5432 12.3051C22.379 12.141 22.1564 12.0489 21.9242 12.049C21.6921 12.0491 21.4695 12.1414 21.3054 12.3056C21.1413 12.4698 21.0492 12.6925 21.0493 12.9246C21.0494 13.1568 21.1417 13.3794 21.3059 13.5434L23.762 15.9994L21.3059 18.4555C21.1425 18.6197 21.0508 18.8421 21.051 19.0738C21.0512 19.3055 21.1433 19.5277 21.3071 19.6916C21.4709 19.8556 21.693 19.9478 21.9247 19.9482C22.1565 19.9486 22.3789 19.8571 22.5432 19.6938L24.9999 17.2374L27.4563 19.6938C27.6205 19.8579 27.8432 19.9501 28.0754 19.9501C28.3076 19.95 28.5302 19.8577 28.6944 19.6935C28.8585 19.5293 28.9507 19.3066 28.9507 19.0745C28.9506 18.8423 28.8583 18.6196 28.6941 18.4555L26.2379 15.9994Z" fill="white"/></g></g><defs><clipPath id="clip0_9233_2798"><rect width="8" height="8" fill="white" transform="translate(21 12)"/></clipPath><clipPath id="clip1_9233_2798"><rect width="8" height="8" fill="white" transform="translate(21 12)"/></clipPath></defs></svg>',
};

export default function createSvgElement(iconName) {
  const svgString = ICONS[iconName];

  if (!svgString) {
    // eslint-disable-next-line no-console
    console.warn(`Icon not found: ${iconName}`);
    return null;
  }

  const parser = new DOMParser();
  const svgDoc = parser.parseFromString(svgString, 'image/svg+xml');
  const svgElement = svgDoc.documentElement;

  return svgElement;
}