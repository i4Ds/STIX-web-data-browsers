var StixCommon={
	toHex: function(value){
		return '0x'+(Number(value).toString(16)).toUpperCase();
	},
	viridis:
	[[0.0, 'rgb(255, 255, 255)'], 
		[0.003937007874015748, 'rgb(68, 2, 85)'],
		[0.007874015748031496, 'rgb(68, 3, 87)'],
		[0.011811023622047244, 'rgb(69, 5, 88)'],
		[0.015748031496062992, 'rgb(69, 6, 90)'],
		[0.01968503937007874, 'rgb(69, 8, 91)'],
		[0.023622047244094488, 'rgb(70, 9, 92)'],
		[0.027559055118110236, 'rgb(70, 11, 94)'],
		[0.031496062992125984, 'rgb(70, 12, 95)'],
		[0.03543307086614173, 'rgb(70, 14, 97)'],
		[0.03937007874015748, 'rgb(71, 15, 98)'],
		[0.04330708661417323, 'rgb(71, 17, 99)'],
		[0.047244094488188976, 'rgb(71, 18, 101)'],
		[0.051181102362204724, 'rgb(71, 20, 102)'],
		[0.05511811023622047, 'rgb(71, 21, 103)'],
		[0.05905511811023622, 'rgb(71, 22, 105)'],
		[0.06299212598425197, 'rgb(71, 24, 106)'],
		[0.06692913385826771, 'rgb(72, 25, 107)'],
		[0.07086614173228346, 'rgb(72, 26, 108)'],
		[0.07480314960629922, 'rgb(72, 28, 110)'],
		[0.07874015748031496, 'rgb(72, 29, 111)'],
		[0.0826771653543307, 'rgb(72, 30, 112)'],
		[0.08661417322834646, 'rgb(72, 32, 113)'],
		[0.09055118110236221, 'rgb(72, 33, 114)'],
		[0.09448818897637795, 'rgb(72, 34, 115)'],
		[0.09842519685039369, 'rgb(72, 35, 116)'],
		[0.10236220472440945, 'rgb(71, 37, 117)'],
		[0.1062992125984252, 'rgb(71, 38, 118)'],
		[0.11023622047244094, 'rgb(71, 39, 119)'],
		[0.11417322834645668, 'rgb(71, 40, 120)'],
		[0.11811023622047244, 'rgb(71, 42, 121)'],
		[0.1220472440944882, 'rgb(71, 43, 122)'],
		[0.12598425196850394, 'rgb(71, 44, 123)'],
		[0.12992125984251968, 'rgb(70, 45, 124)'],
		[0.13385826771653542, 'rgb(70, 47, 124)'],
		[0.1377952755905512, 'rgb(70, 48, 125)'],
		[0.14173228346456693, 'rgb(70, 49, 126)'],
		[0.14566929133858267, 'rgb(69, 50, 127)'],
		[0.14960629921259844, 'rgb(69, 52, 127)'],
		[0.15354330708661418, 'rgb(69, 53, 128)'],
		[0.15748031496062992, 'rgb(69, 54, 129)'],
		[0.16141732283464566, 'rgb(68, 55, 129)'],
		[0.1653543307086614, 'rgb(68, 57, 130)'],
		[0.16929133858267717, 'rgb(67, 58, 131)'],
		[0.1732283464566929, 'rgb(67, 59, 131)'],
		[0.17716535433070865, 'rgb(67, 60, 132)'],
		[0.18110236220472442, 'rgb(66, 61, 132)'],
		[0.18503937007874016, 'rgb(66, 62, 133)'],
		[0.1889763779527559, 'rgb(66, 64, 133)'],
		[0.19291338582677164, 'rgb(65, 65, 134)'],
		[0.19685039370078738, 'rgb(65, 66, 134)'],
		[0.20078740157480315, 'rgb(64, 67, 135)'],
		[0.2047244094488189, 'rgb(64, 68, 135)'],
		[0.20866141732283464, 'rgb(63, 69, 135)'],
		[0.2125984251968504, 'rgb(63, 71, 136)'],
		[0.21653543307086615, 'rgb(62, 72, 136)'],
		[0.2204724409448819, 'rgb(62, 73, 137)'],
		[0.22440944881889763, 'rgb(61, 74, 137)'],
		[0.22834645669291337, 'rgb(61, 75, 137)'],
		[0.23228346456692914, 'rgb(61, 76, 137)'],
		[0.23622047244094488, 'rgb(60, 77, 138)'],
		[0.24015748031496062, 'rgb(60, 78, 138)'],
		[0.2440944881889764, 'rgb(59, 80, 138)'],
		[0.24803149606299213, 'rgb(59, 81, 138)'],
		[0.25196850393700787, 'rgb(58, 82, 139)'],
		[0.2559055118110236, 'rgb(58, 83, 139)'],
		[0.25984251968503935, 'rgb(57, 84, 139)'],
		[0.2637795275590551, 'rgb(57, 85, 139)'],
		[0.26771653543307083, 'rgb(56, 86, 139)'],
		[0.27165354330708663, 'rgb(56, 87, 140)'],
		[0.2755905511811024, 'rgb(55, 88, 140)'],
		[0.2795275590551181, 'rgb(55, 89, 140)'],
		[0.28346456692913385, 'rgb(54, 90, 140)'],
		[0.2874015748031496, 'rgb(54, 91, 140)'],
		[0.29133858267716534, 'rgb(53, 92, 140)'],
		[0.2952755905511811, 'rgb(53, 93, 140)'],
		[0.2992125984251969, 'rgb(52, 94, 141)'],
		[0.3031496062992126, 'rgb(52, 95, 141)'],
		[0.30708661417322836, 'rgb(51, 96, 141)'],
		[0.3110236220472441, 'rgb(51, 97, 141)'],
		[0.31496062992125984, 'rgb(50, 98, 141)'],
		[0.3188976377952756, 'rgb(50, 99, 141)'],
		[0.3228346456692913, 'rgb(49, 100, 141)'],
		[0.32677165354330706, 'rgb(49, 101, 141)'],
		[0.3307086614173228, 'rgb(49, 102, 141)'],
		[0.3346456692913386, 'rgb(48, 103, 141)'],
		[0.33858267716535434, 'rgb(48, 104, 141)'],
		[0.3425196850393701, 'rgb(47, 105, 141)'],
		[0.3464566929133858, 'rgb(47, 106, 141)'],
		[0.35039370078740156, 'rgb(46, 107, 142)'],
		[0.3543307086614173, 'rgb(46, 108, 142)'],
		[0.35826771653543305, 'rgb(46, 109, 142)'],
		[0.36220472440944884, 'rgb(45, 110, 142)'],
		[0.3661417322834646, 'rgb(45, 111, 142)'],
		[0.3700787401574803, 'rgb(44, 112, 142)'],
		[0.37401574803149606, 'rgb(44, 113, 142)'],
		[0.3779527559055118, 'rgb(44, 114, 142)'],
		[0.38188976377952755, 'rgb(43, 115, 142)'],
		[0.3858267716535433, 'rgb(43, 116, 142)'],
		[0.38976377952755903, 'rgb(42, 117, 142)'],
		[0.39370078740157477, 'rgb(42, 118, 142)'],
		[0.39763779527559057, 'rgb(42, 119, 142)'],
		[0.4015748031496063, 'rgb(41, 120, 142)'],
		[0.40551181102362205, 'rgb(41, 121, 142)'],
		[0.4094488188976378, 'rgb(40, 122, 142)'],
		[0.41338582677165353, 'rgb(40, 122, 142)'],
		[0.41732283464566927, 'rgb(40, 123, 142)'],
		[0.421259842519685, 'rgb(39, 124, 142)'],
		[0.4251968503937008, 'rgb(39, 125, 142)'],
		[0.42913385826771655, 'rgb(39, 126, 142)'],
		[0.4330708661417323, 'rgb(38, 127, 142)'],
		[0.43700787401574803, 'rgb(38, 128, 142)'],
		[0.4409448818897638, 'rgb(38, 129, 142)'],
		[0.4448818897637795, 'rgb(37, 130, 142)'],
		[0.44881889763779526, 'rgb(37, 131, 141)'],
		[0.452755905511811, 'rgb(36, 132, 141)'],
		[0.45669291338582674, 'rgb(36, 133, 141)'],
		[0.46062992125984253, 'rgb(36, 134, 141)'],
		[0.4645669291338583, 'rgb(35, 135, 141)'],
		[0.468503937007874, 'rgb(35, 136, 141)'],
		[0.47244094488188976, 'rgb(35, 137, 141)'],
		[0.4763779527559055, 'rgb(34, 137, 141)'],
		[0.48031496062992124, 'rgb(34, 138, 141)'],
		[0.484251968503937, 'rgb(34, 139, 141)'],
		[0.4881889763779528, 'rgb(33, 140, 141)'],
		[0.4921259842519685, 'rgb(33, 141, 140)'],
		[0.49606299212598426, 'rgb(33, 142, 140)'], [0.5, 'rgb(32, 144, 140)'],
		[0.5039370078740157, 'rgb(32, 145, 140)'],
		[0.5078740157480315, 'rgb(31, 146, 140)'],
		[0.5118110236220472, 'rgb(31, 147, 139)'],
		[0.515748031496063, 'rgb(31, 148, 139)'],
		[0.5196850393700787, 'rgb(31, 149, 139)'],
		[0.5236220472440944, 'rgb(31, 150, 139)'],
		[0.5275590551181102, 'rgb(30, 151, 138)'],
		[0.5314960629921259, 'rgb(30, 152, 138)'],
		[0.5354330708661417, 'rgb(30, 153, 138)'],
		[0.5393700787401575, 'rgb(30, 153, 138)'],
		[0.5433070866141733, 'rgb(30, 154, 137)'],
		[0.547244094488189, 'rgb(30, 155, 137)'],
		[0.5511811023622047, 'rgb(30, 156, 137)'],
		[0.5551181102362205, 'rgb(30, 157, 136)'],
		[0.5590551181102362, 'rgb(30, 158, 136)'],
		[0.562992125984252, 'rgb(30, 159, 136)'],
		[0.5669291338582677, 'rgb(30, 160, 135)'],
		[0.5708661417322834, 'rgb(31, 161, 135)'],
		[0.5748031496062992, 'rgb(31, 162, 134)'],
		[0.5787401574803149, 'rgb(31, 163, 134)'],
		[0.5826771653543307, 'rgb(32, 164, 133)'],
		[0.5866141732283464, 'rgb(32, 165, 133)'],
		[0.5905511811023622, 'rgb(33, 166, 133)'],
		[0.5944881889763779, 'rgb(33, 167, 132)'],
		[0.5984251968503937, 'rgb(34, 167, 132)'],
		[0.6023622047244095, 'rgb(35, 168, 131)'],
		[0.6062992125984252, 'rgb(35, 169, 130)'],
		[0.610236220472441, 'rgb(36, 170, 130)'],
		[0.6141732283464567, 'rgb(37, 171, 129)'],
		[0.6181102362204725, 'rgb(38, 172, 129)'],
		[0.6220472440944882, 'rgb(39, 173, 128)'],
		[0.6259842519685039, 'rgb(40, 174, 127)'],
		[0.6299212598425197, 'rgb(41, 175, 127)'],
		[0.6338582677165354, 'rgb(42, 176, 126)'],
		[0.6377952755905512, 'rgb(43, 177, 125)'],
		[0.6417322834645669, 'rgb(44, 177, 125)'],
		[0.6456692913385826, 'rgb(46, 178, 124)'],
		[0.6496062992125984, 'rgb(47, 179, 123)'],
		[0.6535433070866141, 'rgb(48, 180, 122)'],
		[0.6574803149606299, 'rgb(50, 181, 122)'],
		[0.6614173228346456, 'rgb(51, 182, 121)'],
		[0.6653543307086615, 'rgb(53, 183, 120)'],
		[0.6692913385826772, 'rgb(54, 184, 119)'],
		[0.6732283464566929, 'rgb(56, 185, 118)'],
		[0.6771653543307087, 'rgb(57, 185, 118)'],
		[0.6811023622047244, 'rgb(59, 186, 117)'],
		[0.6850393700787402, 'rgb(61, 187, 116)'],
		[0.6889763779527559, 'rgb(62, 188, 115)'],
		[0.6929133858267716, 'rgb(64, 189, 114)'],
		[0.6968503937007874, 'rgb(66, 190, 113)'],
		[0.7007874015748031, 'rgb(68, 190, 112)'],
		[0.7047244094488189, 'rgb(69, 191, 111)'],
		[0.7086614173228346, 'rgb(71, 192, 110)'],
		[0.7125984251968503, 'rgb(73, 193, 109)'],
		[0.7165354330708661, 'rgb(75, 194, 108)'],
		[0.7204724409448818, 'rgb(77, 194, 107)'],
		[0.7244094488188977, 'rgb(79, 195, 105)'],
		[0.7283464566929134, 'rgb(81, 196, 104)'],
		[0.7322834645669292, 'rgb(83, 197, 103)'],
		[0.7362204724409449, 'rgb(85, 198, 102)'],
		[0.7401574803149606, 'rgb(87, 198, 101)'],
		[0.7440944881889764, 'rgb(89, 199, 100)'],
		[0.7480314960629921, 'rgb(91, 200, 98)'],
		[0.7519685039370079, 'rgb(94, 201, 97)'],
		[0.7559055118110236, 'rgb(96, 201, 96)'],
		[0.7598425196850394, 'rgb(98, 202, 95)'],
		[0.7637795275590551, 'rgb(100, 203, 93)'],
		[0.7677165354330708, 'rgb(103, 204, 92)'],
		[0.7716535433070866, 'rgb(105, 204, 91)'],
		[0.7755905511811023, 'rgb(107, 205, 89)'],
		[0.7795275590551181, 'rgb(109, 206, 88)'],
		[0.7834645669291338, 'rgb(112, 206, 86)'],
		[0.7874015748031495, 'rgb(114, 207, 85)'],
		[0.7913385826771654, 'rgb(116, 208, 84)'],
		[0.7952755905511811, 'rgb(119, 208, 82)'],
		[0.7992125984251969, 'rgb(121, 209, 81)'],
		[0.8031496062992126, 'rgb(124, 210, 79)'],
		[0.8070866141732284, 'rgb(126, 210, 78)'],
		[0.8110236220472441, 'rgb(129, 211, 76)'],
		[0.8149606299212598, 'rgb(131, 211, 75)'],
		[0.8188976377952756, 'rgb(134, 212, 73)'],
		[0.8228346456692913, 'rgb(136, 213, 71)'],
		[0.8267716535433071, 'rgb(139, 213, 70)'],
		[0.8307086614173228, 'rgb(141, 214, 68)'],
		[0.8346456692913385, 'rgb(144, 214, 67)'],
		[0.8385826771653543, 'rgb(146, 215, 65)'],
		[0.84251968503937, 'rgb(149, 215, 63)'],
		[0.8464566929133858, 'rgb(151, 216, 62)'],
		[0.8503937007874016, 'rgb(154, 216, 60)'],
		[0.8543307086614174, 'rgb(157, 217, 58)'],
		[0.8582677165354331, 'rgb(159, 217, 56)'],
		[0.8622047244094488, 'rgb(162, 218, 55)'],
		[0.8661417322834646, 'rgb(165, 218, 53)'],
		[0.8700787401574803, 'rgb(167, 219, 51)'],
		[0.8740157480314961, 'rgb(170, 219, 50)'],
		[0.8779527559055118, 'rgb(173, 220, 48)'],
		[0.8818897637795275, 'rgb(175, 220, 46)'],
		[0.8858267716535433, 'rgb(178, 221, 44)'],
		[0.889763779527559, 'rgb(181, 221, 43)'],
		[0.8937007874015748, 'rgb(183, 221, 41)'],
		[0.8976377952755905, 'rgb(186, 222, 39)'],
		[0.9015748031496063, 'rgb(189, 222, 38)'],
		[0.905511811023622, 'rgb(191, 223, 36)'],
		[0.9094488188976377, 'rgb(194, 223, 34)'],
		[0.9133858267716535, 'rgb(197, 223, 33)'],
		[0.9173228346456693, 'rgb(199, 224, 31)'],
		[0.9212598425196851, 'rgb(202, 224, 30)'],
		[0.9251968503937008, 'rgb(205, 224, 29)'],
		[0.9291338582677166, 'rgb(207, 225, 28)'],
		[0.9330708661417323, 'rgb(210, 225, 27)'],
		[0.937007874015748, 'rgb(212, 225, 26)'],
		[0.9409448818897638, 'rgb(215, 226, 25)'],
		[0.9448818897637795, 'rgb(218, 226, 24)'],
		[0.9488188976377953, 'rgb(220, 226, 24)'],
		[0.952755905511811, 'rgb(223, 227, 24)'],
		[0.9566929133858267, 'rgb(225, 227, 24)'],
		[0.9606299212598425, 'rgb(228, 227, 24)'],
		[0.9645669291338582, 'rgb(231, 228, 25)'],
		[0.968503937007874, 'rgb(233, 228, 25)'],
		[0.9724409448818897, 'rgb(236, 228, 26)'],
		[0.9763779527559056, 'rgb(238, 229, 27)'],
		[0.9803149606299213, 'rgb(241, 229, 28)'],
		[0.984251968503937, 'rgb(243, 229, 30)'],
		[0.9881889763779528, 'rgb(246, 230, 31)'],
		[0.9921259842519685, 'rgb(248, 230, 33)'],
		[0.9960629921259843, 'rgb(250, 230, 34)'], [1.0, 'rgb(253, 231, 36)']],
	plotlyConfigAllowSharing:{showLink: true, displaylogo: false, sendDataToCloud:true, sendData: true},
	plotlyConfigCloud:{ displaylogo: false, sendDataToCloud:true, sendData: true},
	plotlyConfig:{showLink: false, displaylogo: false, sendDataToCloud:false, sendData: false, modeBarButtonsToRemove: ['sendDataToCloud'],  linkText: false},
	isObjectEmpty:function(obj) {
		return Object.keys(obj).length === 0;
	}



};

