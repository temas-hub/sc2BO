	[
	{
		name : "Protoss",
		save : "P",
		entities :
		[
		{
			name : "Minerals",
			section : "resource",
			kind : "resource",
			icon : "protoss/minerals",
			start : 50,
			style : "resource"
		},
		{
			name : "Gas",
			section : "resource",
			kind : "resource",
			icon : "protoss/gas",
			style : "resource"
		},
		{
			name : "Food",
			section : "resource",
			kind : "hidden",
			start : 6,
			style : "hidden"
		},
		{
			name : "Energy",
			section : "resource",
			kind : "resource",
			icon : "protoss/energy",
			multi : "Energy Spawner",
			cap : 100,
			style : "resource"
		},
		{
			name : "Supply",
			section : "resource",
			kind : "resource",
			icon : "protoss/supply",
			start : 10,
			cap : 200,
			style : "supply"
		},
		{
			name : "Energy Spawner",
			section : "resource",
			kind : "hidden",
			time : 889,
			start : 1,
			autocheck : true,
			products :
			[
			{
				name : "Energy",
				amount : 5
			} ],
			atmost :
			{
				name : "Energy",
				amount : 100,
				error : "Energy full"
			},
			style : "hidden"
		},
		{
			name : "Gas Geyser",
			section : "resource",
			kind : "hidden",
			start : 2,
			style : "hidden"
		},
		{
			name : "Fast Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 545,
			autocheck : true,
			need :
			[
			{
				name : "Gas Probe",
				error : "No gas probe available."
			},
			{
				name : "Fast Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 857,
			autocheck : true,
			need :
			[
			{
				name : "Gas Probe",
				error : "No gas probe available."
			},
			{
				name : "Slow Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Gas Space",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Fast Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			start : 16,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Probe",
				error : "No probe available."
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Slow Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			start : 8,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Probe",
				error : "No probe available."
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Fast Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Probe",
				error : "No probe available."
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Probe",
				error : "No probe available."
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Gate",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Probe",
			section : "worker",
			kind : "unit",
			save : "a",
			icon : "protoss/probe",
			time : 1700,
			start : 6,
			conditions :
			[ "Nexus" ],
			need :
			[
			{
				name : "Nexus",
				error : "All nexus busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food available."
			} ],
			products :
			[
			{
				name : "Probe",
				amount : 1
			},
			{
				name : "Mineral Probe",
				amount : 1
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "nonumber"
		},
		{
			name : "Mineral Probe",
			section : "special",
			kind : "special",
			save : "iE",
			icon : "protoss/mineralprobe",
			time : 100,
			start : 6,
			costs :
			[
			{
				name : "Gas Space",
				amount : -1,
				error : "No gas space available."
			},
			{
				name : "Gas Probe",
				amount : 1,
				error : "No gas probes available."
			} ],
			products :
			[
			{
				name : "Mineral Probe",
				amount : 1
			} ],
			adding : "Mineral Probe",
			addsto : "2 x Mineral Probe",
			style : "instant"
		},
		{
			name : "2 x Mineral Probe",
			section : "special",
			kind : "hidden",
			save : "iF",
			icon : "protoss/mineralprobe",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -2,
				error : "No gas space available."
			},
			{
				name : "Gas Probe",
				amount : 2,
				error : "No gas probes available."
			} ],
			products :
			[
			{
				name : "Mineral Probe",
				amount : 2
			} ],
			adding : "Mineral Probe",
			addsto : "3 x Mineral Probe",
			style : "instant"
		},
		{
			name : "3 x Mineral Probe",
			section : "special",
			kind : "hidden",
			save : "b",
			icon : "protoss/mineralprobe",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -3,
				error : "No gas space available."
			},
			{
				name : "Gas Probe",
				amount : 3,
				error : "No gas probes available."
			} ],
			products :
			[
			{
				name : "Mineral Probe",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Gas Probe",
			section : "special",
			kind : "special",
			save : "iG",
			icon : "protoss/gasprobe",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 1,
				error : "No gas space available."
			},
			{
				name : "Mineral Probe",
				amount : 1,
				error : "No mineral probes available."
			} ],
			products :
			[
			{
				name : "Gas Probe",
				amount : 1
			} ],
			adding : "Gas Probe",
			addsto : "2 x Gas Probe",
			style : "instant"
		},
		{
			name : "2 x Gas Probe",
			section : "special",
			kind : "hidden",
			save : "iH",
			icon : "protoss/gasprobe",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 2,
				error : "No gas space available."
			},
			{
				name : "Mineral Probe",
				amount : 2,
				error : "No mineral probes available."
			} ],
			products :
			[
			{
				name : "Gas Probe",
				amount : 2
			} ],
			adding : "Gas Probe",
			addsto : "3 x Gas Probe",
			style : "instant"
		},
		{
			name : "3 x Gas Probe",
			section : "special",
			kind : "hidden",
			save : "c",
			icon : "protoss/gasprobe",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 3,
				error : "No gas space available."
			},
			{
				name : "Mineral Probe",
				amount : 3,
				error : "No mineral probes available."
			} ],
			products :
			[
			{
				name : "Gas Probe",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Go out with Probe",
			section : "special",
			kind : "special",
			save : "d",
			icon : "protoss/scout_out",
			time : 100,
			costs :
			[
			{
				name : "Mineral Probe",
				amount : 1,
				error : "No probe available."
			} ],
			style : "action"
		},
		{
			name : "Return Probe",
			section : "special",
			kind : "special",
			save : "e",
			icon : "protoss/scout_in",
			time : 100,
			costs :
			[
			{
				name : "Go out with Probe",
				amount : 1,
				error : "No probe is out."
			} ],
			products :
			[
			{
				name : "Mineral Probe",
				amount : 1
			} ],
			style : "action"
		},
		{
			name : "Pause",
			section : "pause",
			kind : "special",
			save : "p",
			icon : "pause",
			time : 100,
			delay : true,
			style : "pause"
		},
		{
			name : "Chronoboost",
			section : "special",
			kind : "special",
			save : "f",
			icon : "protoss/chronoboost",
			time : 2000,
			costs :
			[
			{
				name : "Energy",
				amount : 25,
				error : "Not enough energy."
			} ],
			products :
			[],
			style : "normal"
		},
		{
			name : "Zealot",
			section : "unit",
			kind : "unit",
			save : "g",
			icon : "protoss/zealot",
			time : 3800,
			conditions :
			[ "Gateway" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "All gateways busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Sentry",
			section : "unit",
			kind : "unit",
			save : "h",
			icon : "protoss/sentry",
			time : 3700,
			conditions :
			[ "Gateway" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "All gateways busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Stalker",
			section : "unit",
			kind : "unit",
			save : "j",
			icon : "protoss/stalker",
			time : 4200,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "All gateways busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Dark Templar",
			section : "unit",
			kind : "unit",
			save : "k",
			icon : "protoss/darktemplar",
			time : 5500,
			conditions :
			[ "Dark Shrine" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "All gateways busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 125,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "High Templar",
			section : "unit",
			kind : "unit",
			save : "l",
			icon : "protoss/hightemplar",
			time : 5500,
			conditions :
			[ "Templar Archives" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "All gateways busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Warp in Zealot",
			section : "unit",
			kind : "unit",
			save : "m",
			icon : "protoss/warpzealot",
			time : 2800,
			conditions :
			[ "Warp Gate" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Warp Gate",
				error : "All warpgates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			},
			{
				name : "Zealot",
				amount : -1,
				error : ""
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			products :
			[],
			style : "normal"
		},
		{
			name : "Warp in Sentry",
			section : "unit",
			kind : "unit",
			save : "n",
			icon : "protoss/warpsentry",
			time : 3200,
			conditions :
			[ "Warp Gate" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Warp Gate",
				error : "All warpgates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			},
			{
				name : "Sentry",
				amount : -1,
				error : ""
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			products :
			[],
			style : "normal"
		},
		{
			name : "Warp in Stalker",
			section : "unit",
			kind : "unit",
			save : "q",
			icon : "protoss/warpstalker",
			time : 3200,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Warp Gate",
				error : "All warpgates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			},
			{
				name : "Stalker",
				amount : -1,
				error : ""
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			products :
			[],
			style : "normal"
		},
		{
			name : "Warp in Dark Templar",
			section : "unit",
			kind : "unit",
			save : "r",
			icon : "protoss/warpdarktemplar",
			time : 4500,
			conditions :
			[ "Dark Shrine" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Warp Gate",
				error : "All warpgates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 125,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			},
			{
				name : "Dark Templar",
				amount : -1,
				error : ""
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			products :
			[],
			style : "normal"
		},
		{
			name : "Warp in High Templar",
			section : "unit",
			kind : "unit",
			save : "s",
			icon : "protoss/warphightemplar",
			time : 4500,
			conditions :
			[ "Templar Archives" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Warp Gate",
				error : "All warpgates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			},
			{
				name : "High Templar",
				amount : -1,
				error : ""
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			products :
			[],
			style : "normal"
		},
		{
			name : "Observer",
			section : "unit",
			kind : "unit",
			save : "t",
			icon : "protoss/observer",
			time : 4000,
			conditions :
			[ "Robotics Facility" ],
			need :
			[
			{
				name : "Robotics Facility",
				error : "All robotics facilities busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 25,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 75,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Warp Prism",
			section : "unit",
			kind : "unit",
			save : "v",
			icon : "protoss/warpprism",
			time : 5000,
			conditions :
			[ "Robotics Facility" ],
			need :
			[
			{
				name : "Robotics Facility",
				error : "All robotics facilities busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Immortal",
			section : "unit",
			kind : "unit",
			save : "w",
			icon : "protoss/immortal",
			time : 5500,
			conditions :
			[ "Robotics Facility" ],
			need :
			[
			{
				name : "Robotics Facility",
				error : "All robotics facilities busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -4,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Colossus",
			section : "unit",
			kind : "unit",
			save : "x",
			icon : "protoss/colossus",
			time : 7500,
			conditions :
			[ "Robotics Bay" ],
			need :
			[
			{
				name : "Robotics Facility",
				error : "All robotics facilities busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -6,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Phoenix",
			section : "unit",
			kind : "unit",
			save : "iI",
			icon : "protoss/phoenix",
			time : 3500,
			conditions :
			[ "Stargate" ],
			need :
			[
			{
				name : "Stargate",
				error : "All stargates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Void Ray",
			section : "unit",
			kind : "unit",
			save : "z",
			icon : "protoss/voidray",
			time : 6000,
			conditions :
			[ "Stargate" ],
			need :
			[
			{
				name : "Stargate",
				error : "All stargates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -3,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Carrier",
			section : "unit",
			kind : "unit",
			save : "iA",
			icon : "protoss/carrier",
			time : 12000,
			conditions :
			[ "Fleet Beacon" ],
			need :
			[
			{
				name : "Stargate",
				error : "All stargates busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 350,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -6,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Interceptor",
			section : "unit",
			kind : "unit",
			save : "iB",
			icon : "protoss/interceptor",
			time : 800,
			conditions :
			[ "Carrier" ],
			need :
			[
			{
				name : "Carrier",
				error : "All carriers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 25,
				error : "Not enough minerals."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "normal"
		},
		{
			name : "Mothership",
			section : "unit",
			kind : "unit",
			save : "iC",
			icon : "protoss/mothership",
			time : 16000,
			conditions :
			[ "Fleet Beacon" ],
			need :
			[
			{
				name : "Nexus",
				error : "All nexuses busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 400,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -8,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough psi."
			},
			style : "single"
		},
		{
			name : "Archon from DT and DT",
			section : "unit",
			kind : "unit",
			save : "iD",
			icon : "protoss/archon",
			time : 1200,
			costs :
			[
			{
				name : "Dark Templar",
				amount : 2,
				error : "Not enough dark templars."
			} ],
			style : "normal"
		},
		{
			name : "Archon from HT and HT",
			section : "unit",
			kind : "unit",
			save : "iJ",
			icon : "protoss/archon",
			time : 1200,
			costs :
			[
			{
				name : "High Templar",
				amount : 2,
				error : "Not enough high templars."
			} ],
			products :
			[
			{
				name : "Archon from DT and DT",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Archon from DT and HT",
			section : "unit",
			kind : "unit",
			save : "iK",
			icon : "protoss/archon",
			time : 1200,
			costs :
			[
			{
				name : "Dark Templar",
				amount : 1,
				error : "Not enough dark templars."
			},
			{
				name : "High Templar",
				amount : 1,
				error : "Not enough high templars."
			} ],
			products :
			[
			{
				name : "Archon from DT and DT",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Nexus",
			section : "building",
			kind : "building",
			save : "oA",
			icon : "protoss/nexus",
			time : 10000,
			start : 1,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			} ],
			products :
			[
			{
				name : "Nexus",
				amount : 1
			},
			{
				name : "Fast Mineral Patch",
				amount : 16
			},
			{
				name : "Slow Mineral Patch",
				amount : 8
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 10
			},
			{
				name : "Energy Spawner",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Assimilator",
			section : "building",
			kind : "building",
			save : "oB",
			icon : "protoss/assimilator",
			time : 3000,
			costs :
			[
			{
				name : "Gas Geyser",
				amount : 1,
				error : "No gas Geyser available."
			},
			{
				name : "Minerals",
				amount : 75,
				error : "Not enough minerals."
			} ],
			products :
			[
				{
					name : "Assimilator",
					amount : 1
				},
			{
				name : "Gas Space",
				amount : 3
			},
			{
				name : "Fast Gas Patch",
				amount : 2
			},
			{
				name : "Slow Gas Patch",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Pylon",
			section : "building",
			kind : "building",
			save : "oC",
			icon : "protoss/pylon",
			time : 2500,
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			} ],
			products :
			[
			{
				name : "Pylon",
				amount : 1
			},
			{
				name : "Supply",
				amount : 8
			} ],
			style : "normal"
		},
		{
			name : "Gateway",
			section : "building",
			kind : "building",
			save : "oD",
			icon : "protoss/gateway",
			time : 6500,
			conditions :
			[ "Pylon" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			} ],
			products :
			[
			{
				name : "Gateway",
				amount : 1
			},
			{
				name : "Gate",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Forge",
			section : "building",
			kind : "building",
			save : "oE",
			icon : "protoss/forge",
			time : 4500,
			conditions :
			[ "Pylon" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			} ],
			style : "normal"
		},
		{
			name : "Cybernetics Core",
			section : "building",
			kind : "building",
			save : "oF",
			icon : "protoss/cyberneticscore",
			time : 5000,
			conditions :
			[ "Gateway" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			} ],
			style : "normal"
		},
		{
			name : "Photon Cannon",
			section : "building",
			kind : "building",
			save : "oG",
			icon : "protoss/photoncannon",
			time : 4000,
			conditions :
			[ "Forge" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			} ],
			style : "normal"
		},
		{
			name : "Twilight Council",
			section : "building",
			kind : "building",
			save : "oH",
			icon : "protoss/twilightcouncil",
			time : 5000,
			conditions :
			[ "Cybernetics Core" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Stargate",
			section : "building",
			kind : "building",
			save : "oI",
			icon : "protoss/stargate",
			time : 6000,
			conditions :
			[ "Cybernetics Core" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Robotics Facility",
			section : "building",
			kind : "building",
			save : "oJ",
			icon : "protoss/roboticsfacility",
			time : 6500,
			conditions :
			[ "Cybernetics Core" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Templar Archives",
			section : "building",
			kind : "building",
			save : "oK",
			icon : "protoss/templararchives",
			time : 5000,
			conditions :
			[ "Twilight Council" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Fleet Beacon",
			section : "building",
			kind : "building",
			save : "oL",
			icon : "protoss/fleetbeacon",
			time : 6000,
			conditions :
			[ "Stargate" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Robotics Bay",
			section : "building",
			kind : "building",
			save : "oM",
			icon : "protoss/roboticsbay",
			time : 6500,
			conditions :
			[ "Robotics Facility" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Dark Shrine",
			section : "building",
			kind : "building",
			save : "oN",
			icon : "protoss/darkshrine",
			time : 10000,
			conditions :
			[ "Twilight Council" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Warp Gate",
			section : "building",
			kind : "building",
			save : "oO",
			icon : "protoss/warpgate",
			time : 1000,
			conditions :
			[ "Warp Gate Upgrade" ],
			need :
			[
			{
				name : "Gate",
				error : "All gateways busy"
			},
			{
				name : "Gateway",
				error : "No gateway available."
			} ],
			products :
			[
			{
				name : "Warp Gate",
				amount : 1
			},
			{
				name : "Gateway",
				amount : -1
			} ],
			style : "notext"
		},
		{
			name : "Nexus in Base",
			section : "building",
			kind : "building",
			save : "oP",
			icon : "protoss/nexus",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			} ],
			products :
			[
			{
				name : "Nexus",
				amount : 1
			},
			{
				name : "Supply",
				amount : 10
			},
			{
				name : "Energy Spawner",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Gold Expansion",
			section : "building",
			kind : "building",
			save : "oQ",
			icon : "protoss/goldexpansion",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			} ],
			products :
			[
			{
				name : "Nexus",
				amount : 1
			},
			{
				name : "Fast Gold Mineral Patch",
				amount : 12
			},
			{
				name : "Slow Gold Mineral Patch",
				amount : 6
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 10
			},
			{
				name : "Energy Spawner",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Warp Gate Upgrade",
			section : "upgrade",
			kind : "upgrade",
			save : "uA",
			icon : "protoss/warpgateupgrade",
			time : 16000,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Hallucination",
			section : "upgrade",
			kind : "upgrade",
			save : "uB",
			icon : "protoss/hallucination",
			time : 8000,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Blink",
			section : "upgrade",
			kind : "upgrade",
			save : "uC",
			icon : "protoss/blink",
			time : 14000,
			conditions :
			[ "Twilight Council" ],
			need :
			[
			{
				name : "Twilight Council",
				error : "All twilight councils busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Charge",
			section : "upgrade",
			kind : "upgrade",
			save : "uD",
			icon : "protoss/charge",
			time : 14000,
			conditions :
			[ "Twilight Council" ],
			need :
			[
			{
				name : "Twilight Council",
				error : "All twilight councils busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Gravitic Drive",
			section : "upgrade",
			kind : "upgrade",
			save : "uE",
			icon : "protoss/graviticdrive",
			time : 8000,
			conditions :
			[ "Robotics Bay" ],
			need :
			[
			{
				name : "Robotics Bay",
				error : "All robotic bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Gravitic Boosters",
			section : "upgrade",
			kind : "upgrade",
			save : "uF",
			icon : "protoss/graviticbooster",
			time : 8000,
			conditions :
			[ "Robotics Bay" ],
			need :
			[
			{
				name : "Robotics Bay",
				error : "All robotic bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Extended Thermal Lance",
			section : "upgrade",
			kind : "upgrade",
			save : "uG",
			icon : "protoss/extendedthermallance",
			time : 14000,
			conditions :
			[ "Robotics Bay" ],
			need :
			[
			{
				name : "Robotics Bay",
				error : "All robotic bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Weapons Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uH",
			icon : "protoss/groundweaponslevel1",
			time : 16000,
			conditions :
			[ "Forge" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Weapons Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uI",
			icon : "protoss/groundweaponslevel2",
			time : 19000,
			conditions :
			[ "Ground Weapons Level 1", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Weapons Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uJ",
			icon : "protoss/groundweaponslevel3",
			time : 22000,
			conditions :
			[ "Ground Weapons Level 2", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Weapons Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uK",
			icon : "protoss/airweaponslevel1",
			time : 16000,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Weapons Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uL",
			icon : "protoss/airweaponslevel2",
			time : 19000,
			conditions :
			[ "Air Weapons Level 1", "Fleet Beacon" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Weapons Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uM",
			icon : "protoss/airweaponslevel3",
			time : 22000,
			conditions :
			[ "Air Weapons Level 2", "Fleet Beacon" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Armor Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uN",
			icon : "protoss/groundarmorlevel1",
			time : 16000,
			conditions :
			[ "Forge" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Armor Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uO",
			icon : "protoss/groundarmorlevel2",
			time : 19000,
			conditions :
			[ "Ground Armor Level 1", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Armor Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uP",
			icon : "protoss/groundarmorlevel3",
			time : 22000,
			conditions :
			[ "Ground Armor Level 2", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Armor Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uQ",
			icon : "protoss/airarmorlevel1",
			time : 16000,
			conditions :
			[ "Cybernetics Core" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Armor Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uR",
			icon : "protoss/airarmorlevel2",
			time : 19000,
			conditions :
			[ "Air Armor Level 1", "Fleet Beacon" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 225,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 225,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Air Armor Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uS",
			icon : "protoss/airarmorlevel3",
			time : 22000,
			conditions :
			[ "Air Armor Level 2", "Fleet Beacon" ],
			need :
			[
			{
				name : "Cybernetics Core",
				error : "All cybernetics cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Shields Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uT",
			icon : "protoss/shieldslevel1",
			time : 16000,
			conditions :
			[ "Forge" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Shields Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uU",
			icon : "protoss/shieldslevel2",
			time : 19000,
			conditions :
			[ "Shields Level 1", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Shields Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uV",
			icon : "protoss/shieldslevel3",
			time : 22000,
			conditions :
			[ "Shields Level 2", "Twilight Council" ],
			need :
			[
			{
				name : "Forge",
				error : "All forges busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 400,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Psionic Storm",
			section : "upgrade",
			kind : "upgrade",
			save : "uW",
			icon : "protoss/psionicstorm",
			time : 11000,
			conditions :
			[ "Templar Archives" ],
			need :
			[
			{
				name : "Templar Archives",
				error : "All templar archives busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Graviton Catapult",
			section : "upgrade",
			kind : "upgrade",
			save : "uX",
			icon : "protoss/gravitoncatapult",
			time : 8000,
			conditions :
			[ "Fleet Beacon" ],
			need :
			[
			{
				name : "Fleet Beacon",
				error : "All fleet beacons busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		} ]
	},
	{
		name : "Terran",
		save : "T",
		entities :
		[
		{
			name : "Minerals",
			section : "resource",
			kind : "resource",
			icon : "terran/minerals",
			start : 50,
			style : "resource"
		},
		{
			name : "Gas",
			section : "resource",
			kind : "resource",
			icon : "terran/gas",
			style : "resource"
		},
		{
			name : "Food",
			section : "resource",
			kind : "hidden",
			start : 6,
			style : "hidden"
		},
		{
			name : "Energy",
			section : "resource",
			kind : "resource",
			icon : "terran/energy",
			multi : "Energy Spawner",
			cap : 200,
			style : "resource"
		},
		{
			name : "Supply",
			section : "resource",
			kind : "resource",
			icon : "terran/supply",
			start : 11,
			cap : 200,
			style : "supply"
		},
		{
			name : "Energy Spawner",
			section : "resource",
			kind : "hidden",
			time : 889,
			autocheck : true,
			products :
			[
			{
				name : "Energy",
				amount : 5
			} ],
			atmost :
			{
				name : "Energy",
				amount : 200,
				error : "Energy full"
			},
			style : "hidden"
		},
		{
			name : "Gas Geyser",
			section : "resource",
			kind : "hidden",
			start : 2,
			style : "hidden"
		},
		{
			name : "Fast Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 545,
			autocheck : true,
			need :
			[
			{
				name : "Gas SCV",
				error : "No gas scvs available."
			},
			{
				name : "Fast Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 857,
			autocheck : true,
			need :
			[
			{
				name : "Gas SCV",
				error : "No gas scvs available."
			},
			{
				name : "Slow Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Gas Space",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Mule Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1100,
			autocheck : true,
			need :
			[
			{
				name : "Calldown: MULE",
				error : "No mules available."
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 30
			} ],
			style : "hidden"
		},
		{
			name : "Fast Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			start : 16,
			autocheck : true,
			need :
			[
			{
				name : "Mineral SCV",
				error : "No mineral scvs available."
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Slow Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			start : 8,
			autocheck : true,
			need :
			[
			{
				name : "Mineral SCV",
				error : "No mineral scvs available."
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Fast Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			autocheck : true,
			need :
			[
			{
				name : "Mineral SCV",
				error : "No mineral scvs available."
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			autocheck : true,
			need :
			[
			{
				name : "Mineral SCV",
				error : "No mineral scvs available."
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Basic Command Center",
			section : "resource",
			kind : "hidden",
			start : 1,
			style : "hidden"
		},
		{
			name : "Basic Supply Depot",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Tech Lab Research",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Tech Lab",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Reactor",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "SCV",
			section : "worker",
			kind : "unit",
			save : "a",
			icon : "terran/scv",
			time : 1700,
			start : 6,
			need :
			[
			{
				name : "Command Center",
				error : "All command centers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food available."
			} ],
			products :
			[
			{
				name : "SCV",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "nonumber"
		},
		{
			name : "Mineral SCV",
			section : "special",
			kind : "special",
			save : "iV",
			icon : "terran/mineralscv",
			time : 100,
			start : 6,
			costs :
			[
			{
				name : "Gas Space",
				amount : -1,
				error : "No gas space available."
			},
			{
				name : "Gas SCV",
				amount : 1,
				error : "No gas SCVs available."
			} ],
			products :
			[
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			adding : "Mineral SCV",
			addsto : "2 x Mineral SCV",
			style : "instant"
		},
		{
			name : "2 x Mineral SCV",
			section : "special",
			kind : "hidden",
			save : "iW",
			icon : "terran/mineralscv",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -2,
				error : "No gas space available."
			},
			{
				name : "Gas SCV",
				amount : 2,
				error : "No gas SCVs available."
			} ],
			products :
			[
			{
				name : "Mineral SCV",
				amount : 2
			} ],
			adding : "Mineral SCV",
			addsto : "3 x Mineral SCV",
			style : "instant"
		},
		{
			name : "3 x Mineral SCV",
			section : "special",
			kind : "hidden",
			save : "b",
			icon : "terran/mineralscv",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -3,
				error : "No gas space available."
			},
			{
				name : "Gas SCV",
				amount : 3,
				error : "No gas SCVs available."
			} ],
			products :
			[
			{
				name : "Mineral SCV",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Gas SCV",
			section : "special",
			kind : "special",
			save : "iX",
			icon : "terran/gasscv",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 1,
				error : "No gas space available."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral SCVs available."
			} ],
			products :
			[
			{
				name : "Gas SCV",
				amount : 1
			} ],
			adding : "Gas SCV",
			addsto : "2 x Gas SCV",
			style : "instant"
		},
		{
			name : "2 x Gas SCV",
			section : "special",
			kind : "hidden",
			save : "iY",
			icon : "terran/gasscv",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 2,
				error : "No gas space available."
			},
			{
				name : "Mineral SCV",
				amount : 2,
				error : "No mineral SCVs available."
			} ],
			products :
			[
			{
				name : "Gas SCV",
				amount : 2
			} ],
			adding : "Gas SCV",
			addsto : "3 x Gas SCV",
			style : "instant"
		},
		{
			name : "3 x Gas SCV",
			section : "special",
			kind : "hidden",
			save : "c",
			icon : "terran/gasscv",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 3,
				error : "No gas space available."
			},
			{
				name : "Mineral SCV",
				amount : 3,
				error : "No mineral SCVs available."
			} ],
			products :
			[
			{
				name : "Gas SCV",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Go out with SCV",
			section : "special",
			kind : "special",
			save : "d",
			icon : "terran/scout_out",
			time : 100,
			costs :
			[
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No SCV available."
			} ],
			style : "action"
		},
		{
			name : "Return SCV",
			section : "special",
			kind : "special",
			save : "e",
			icon : "terran/scout_in",
			time : 100,
			costs :
			[
			{
				name : "Go out with SCV",
				amount : 1,
				error : "No SCV is out."
			} ],
			products :
			[
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "action"
		},
		{
			name : "Pause",
			section : "pause",
			kind : "special",
			save : "p",
			icon : "pause",
			time : 100,
			delay : true,
			style : "pause"
		},
		{
			name : "Calldown: MULE",
			section : "special",
			kind : "unit",
			save : "f",
			icon : "terran/mule",
			time : 9000,
			conditions :
			[ "Orbital Command" ],
			costs :
			[
			{
				name : "Energy",
				amount : 50,
				error : "Not enough energy."
			},
			{
				name : "Calldown: MULE",
				amount : -1,
				error : "Not enough mules."
			},
			{
				name : "Mule Mineral Patch",
				amount : -1,
				error : ""
			} ],
			products :
			[
			{
				name : "Calldown: MULE",
				amount : -1
			},
			{
				name : "Mule Mineral Patch",
				amount : -1
			} ],
			style : "normal"
		},
		{
			name : "Scanner Sweep",
			section : "special",
			kind : "special",
			save : "h",
			icon : "terran/scannersweep",
			time : 100,
			conditions :
			[ "Orbital Command" ],
			costs :
			[
			{
				name : "Energy",
				amount : 50,
				error : "Not enough energy."
			} ],
			style : "action"
		},
		{
			name : "Marine",
			section : "unit",
			kind : "unit",
			save : "j",
			icon : "terran/marine",
			time : 2500,
			conditions :
			[ "Barracks" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Marauder",
			section : "unit",
			kind : "unit",
			save : "k",
			icon : "terran/marauder",
			time : 3000,
			conditions :
			[ "Tech Lab" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Reaper",
			section : "unit",
			kind : "unit",
			save : "l",
			icon : "terran/reaper",
			time : 4500,
			conditions :
			[ "Tech Lab" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Ghost",
			section : "unit",
			kind : "unit",
			save : "m",
			icon : "terran/ghost",
			time : 4000,
			conditions :
			[ "Tech Lab" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Hellion",
			section : "unit",
			kind : "unit",
			save : "n",
			icon : "terran/hellion",
			time : 3000,
			conditions :
			[ "Factory" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Siege Tank",
			section : "unit",
			kind : "unit",
			save : "q",
			icon : "terran/siegetank",
			time : 4500,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labss busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 125,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -3,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Thor",
			section : "unit",
			kind : "unit",
			save : "r",
			icon : "terran/thor",
			time : 6000,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labss busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -6,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Viking",
			section : "unit",
			kind : "unit",
			save : "s",
			icon : "terran/viking",
			time : 4200,
			conditions :
			[ "Starport" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 75,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Medivac",
			section : "unit",
			kind : "unit",
			save : "t",
			icon : "terran/medivac",
			time : 4200,
			conditions :
			[ "Starport" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Raven",
			section : "unit",
			kind : "unit",
			save : "v",
			icon : "terran/raven",
			time : 6000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Banshee",
			section : "unit",
			kind : "unit",
			save : "w",
			icon : "terran/banshee",
			time : 6000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -3,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Battlecruiser",
			section : "unit",
			kind : "unit",
			save : "x",
			icon : "terran/battlecruiser",
			time : 9000,
			conditions :
			[ "Tech Lab", "Fusion Core" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Tech Lab",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -6,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			style : "normal"
		},
		{
			name : "Two Marines",
			section : "unit",
			kind : "unit",
			save : "iZ",
			icon : "terran/marines",
			time : 2500,
			conditions :
			[ "Barracks", "Reactor" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			},
			{
				name : "Reactor",
				error : "All reactors busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			products :
			[
			{
				name : "Marine",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Two Hellions",
			section : "unit",
			kind : "unit",
			save : "z",
			icon : "terran/hellions",
			time : 3000,
			conditions :
			[ "Factory", "Reactor" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			},
			{
				name : "Reactor",
				error : "All reactors busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -4,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			products :
			[
			{
				name : "Hellion",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Two Vikings",
			section : "unit",
			kind : "unit",
			save : "iA",
			icon : "terran/vikings",
			time : 4200,
			conditions :
			[ "Starport", "Reactor" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Reactor",
				error : "All reactors busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -4,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			products :
			[
			{
				name : "Viking",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Two Medivacs",
			section : "unit",
			kind : "unit",
			save : "iB",
			icon : "terran/medivacs",
			time : 4200,
			conditions :
			[ "Starport", "Reactor" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Reactor",
				error : "All reactors busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -4,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			products :
			[
			{
				name : "Medivac",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Viking Plus Medivac",
			section : "unit",
			kind : "unit",
			save : "iC",
			icon : "terran/vikingplusmedivac",
			time : 4200,
			conditions :
			[ "Starport", "Reactor" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			},
			{
				name : "Reactor",
				error : "All reactors busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			},
			{
				name : "Food",
				amount : -4,
				error : "Not enough food."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough supplies."
			},
			products :
			[
			{
				name : "Viking",
				amount : 1
			},
			{
				name : "Medivac",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Command Center",
			section : "building",
			kind : "building",
			save : "oA",
			icon : "terran/commandcenter",
			time : 10000,
			start : 1,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Command Center",
				amount : 1
			},
			{
				name : "Basic Command Center",
				amount : 1
			},
			{
				name : "Fast Mineral Patch",
				amount : 16
			},
			{
				name : "Slow Mineral Patch",
				amount : 8
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 11
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Planetary Fortress",
			section : "building",
			kind : "building",
			save : "oB",
			icon : "terran/planetaryfortress",
			time : 5000,
			conditions :
			[ "Command Center" ],
			need :
			[
			{
				name : "Command Center",
				error : "All command centers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Basic Command Center",
				amount : 1,
				error : "All command centers have been upgraded."
			} ],
			style : "normal"
		},
		{
			name : "Orbital Command",
			section : "worker",
			kind : "building",
			save : "oC",
			icon : "terran/orbitalcommand",
			time : 3500,
			conditions :
			[ "Barracks" ],
			need :
			[
			{
				name : "Command Center",
				error : "All command centers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Basic Command Center",
				amount : 1,
				error : "All command centers have been upgraded."
			} ],
			products :
			[
			{
				name : "Orbital Command",
				amount : 1
			},
			{
				name : "Energy Spawner",
				amount : 1
			},
			{
				name : "Energy",
				amount : 50
			} ],
			style : "normal"
		},
		{
			name : "Refinery",
			section : "building",
			kind : "building",
			save : "oD",
			icon : "terran/refinery",
			time : 3000,
			costs :
			[
			{
					name : "Gas Geyser",
					amount : 1,
					error : "No gas Geyser available."
			},
			{
				name : "Minerals",
				amount : 75,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Refinery",
				amount : 1
			},
			{
				name : "Gas Space",
				amount : 3
			},
			{
				name : "Fast Gas Patch",
				amount : 2
			},
			{
				name : "Slow Gas Patch",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Supply Depot",
			section : "building",
			kind : "building",
			save : "oE",
			icon : "terran/supplydepot",
			time : 3000,
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Supply Depot",
				amount : 1
			},
			{
				name : "Basic Supply Depot",
				amount : 1
			},
			{
				name : "Supply",
				amount : 8
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Barracks",
			section : "building",
			kind : "building",
			save : "oF",
			icon : "terran/barracks",
			time : 6500,
			conditions :
			[ "Supply Depot" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Barracks",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Engineering Bay",
			section : "building",
			kind : "building",
			save : "oG",
			icon : "terran/engineeringbay",
			time : 3500,
			conditions :
			[ "Command Center" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Engineering Bay",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Bunker",
			section : "building",
			kind : "building",
			save : "oH",
			icon : "terran/bunker",
			time : 4000,
			conditions :
			[ "Barracks" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Bunker",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Factory",
			section : "building",
			kind : "building",
			save : "oI",
			icon : "terran/factory",
			time : 6000,
			conditions :
			[ "Barracks" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Factory",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Ghost Academy",
			section : "building",
			kind : "building",
			save : "oJ",
			icon : "terran/ghostacademy",
			time : 4000,
			conditions :
			[ "Barracks" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Ghost Academy",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Starport",
			section : "building",
			kind : "building",
			save : "oK",
			icon : "terran/starport",
			time : 5000,
			conditions :
			[ "Factory" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Starport",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Armory",
			section : "building",
			kind : "building",
			save : "oL",
			icon : "terran/armory",
			time : 6500,
			conditions :
			[ "Factory" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Armory",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Fusion Core",
			section : "building",
			kind : "building",
			save : "oM",
			icon : "terran/fusioncore",
			time : 6500,
			conditions :
			[ "Starport" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Fusion Core",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Sensor Tower",
			section : "building",
			kind : "unit",
			save : "oN",
			icon : "terran/sensortower",
			time : 2500,
			conditions :
			[ "Engineering Bay" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 125,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Sensor Tower",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Missile Turret",
			section : "building",
			kind : "unit",
			save : "oO",
			icon : "terran/missileturret",
			time : 2500,
			conditions :
			[ "Engineering Bay" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Missile Turret",
				amount : 1
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Tech Lab on Barracks",
			section : "building",
			kind : "building",
			save : "oP",
			icon : "terran/techlab",
			time : 2500,
			conditions :
			[ "Barracks" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Tech Lab",
				amount : 1
			},
			{
				name : "Tech Lab Research",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Reactor on Barracks",
			section : "building",
			kind : "building",
			save : "oQ",
			icon : "terran/reactor",
			time : 5000,
			conditions :
			[ "Barracks" ],
			need :
			[
			{
				name : "Barracks",
				error : "All barracks busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Reactor",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Tech Lab on Factory",
			section : "building",
			kind : "building",
			save : "oR",
			icon : "terran/techlab",
			time : 2500,
			conditions :
			[ "Factory" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Tech Lab",
				amount : 1
			},
			{
				name : "Tech Lab Research",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Reactor on Factory",
			section : "building",
			kind : "building",
			save : "oS",
			icon : "terran/reactor",
			time : 5000,
			conditions :
			[ "Factory" ],
			need :
			[
			{
				name : "Factory",
				error : "All factories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Reactor",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Tech Lab on Starport",
			section : "building",
			kind : "building",
			save : "oT",
			icon : "terran/techlab",
			time : 2500,
			conditions :
			[ "Starport" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Tech Lab",
				amount : 1
			},
			{
				name : "Tech Lab Research",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Reactor on Starport",
			section : "building",
			kind : "building",
			save : "oU",
			icon : "terran/reactor",
			time : 5000,
			conditions :
			[ "Starport" ],
			need :
			[
			{
				name : "Starport",
				error : "All starports busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			products :
			[
			{
				name : "Reactor",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Command Center in Base",
			section : "building",
			kind : "building",
			save : "oV",
			icon : "terran/commandcenter",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Command Center",
				amount : 1
			},
			{
				name : "Basic Command Center",
				amount : 1
			},
			{
				name : "Supply",
				amount : 11
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Salvage Bunker",
			section : "special",
			kind : "building",
			save : "oW",
			icon : "terran/salvagebunker",
			time : 300,
			conditions :
			[ "Bunker" ],
			costs :
			[
			{
				name : "Bunker",
				amount : 1,
				error : "Not enough bunkers."
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 75
			} ],
			style : "action"
		},
		{
			name : "Calldown: Extra Supplies",
			section : "special",
			kind : "building",
			save : "g",
			icon : "terran/extrasupplies2",
			time : 100,
			conditions :
			[ "Orbital Command" ],
			costs :
			[
			{
				name : "Energy",
				amount : 50,
				error : "Not enough energy."
			},
			{
				name : "Basic Supply Depot",
				amount : 1,
				error : "Not enough supply depots."
			} ],
			products :
			[
			{
				name : "Calldown: Extra Supplies",
				amount : 1
			},
			{
				name : "Supply",
				amount : 8
			} ],
			style : "instant"
		},
		{
			name : "Gold Expansion",
			section : "building",
			kind : "building",
			save : "oX",
			icon : "terran/goldexpansion",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 400,
				error : "Not enough minerals."
			},
			{
				name : "Mineral SCV",
				amount : 1,
				error : "No mineral scv available."
			} ],
			products :
			[
			{
				name : "Command Center",
				amount : 1
			},
			{
				name : "Basic Command Center",
				amount : 1
			},
			{
				name : "Fast Gold Mineral Patch",
				amount : 12
			},
			{
				name : "Slow Gold Mineral Patch",
				amount : 6
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 11
			},
			{
				name : "Mineral SCV",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Infantry Weapons Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uA",
			icon : "terran/infantryweapons1",
			time : 16000,
			conditions :
			[ "Engineering Bay" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infantry Weapons Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uB",
			icon : "terran/infantryweapons2",
			time : 19000,
			conditions :
			[ "Infantry Weapons Level 1", "Armory" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infantry Weapons Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uC",
			icon : "terran/infantryweapons3",
			time : 22000,
			conditions :
			[ "Infantry Weapons Level 2", "Armory" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Weapons Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uD",
			icon : "terran/vehicleweapons1",
			time : 16000,
			conditions :
			[ "Armory" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Weapons Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uE",
			icon : "terran/vehicleweapons2",
			time : 19000,
			conditions :
			[ "Vehicle Weapons Level 1" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Weapons Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uF",
			icon : "terran/vehicleweapons3",
			time : 22000,
			conditions :
			[ "Vehicle Weapons Level 2" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 259,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Weapons Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uG",
			icon : "terran/shipweapons1",
			time : 16000,
			conditions :
			[ "Armory" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Weapons Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uH",
			icon : "terran/shipweapons2",
			time : 19000,
			conditions :
			[ "Ship Weapons Level 1" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Weapons Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uI",
			icon : "terran/shipweapons3",
			time : 22000,
			conditions :
			[ "Ship Weapons Level 2" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infantry Armor Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uJ",
			icon : "terran/infantryarmor1",
			time : 16000,
			conditions :
			[ "Engineering Bay" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infantry Armor Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uK",
			icon : "terran/infantryarmor2",
			time : 19000,
			conditions :
			[ "Infantry Armor Level 1" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infantry Armor Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uL",
			icon : "terran/infantryarmor3",
			time : 22000,
			conditions :
			[ "Infantry Armor Level 2" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Plating Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uM",
			icon : "terran/vehicleplating1",
			time : 16000,
			conditions :
			[ "Armory" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Plating Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uN",
			icon : "terran/vehicleplating2",
			time : 19000,
			conditions :
			[ "Vehicle Plating Level 1" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Vehicle Plating Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uO",
			icon : "terran/vehicleplating3",
			time : 22000,
			conditions :
			[ "Vehicle Plating Level 2" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Plating Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uP",
			icon : "terran/shipplating1",
			time : 16000,
			conditions :
			[ "Armory" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Plating Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uQ",
			icon : "terran/shipplating2",
			time : 19000,
			conditions :
			[ "Ship Plating Level 1" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 225,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 225,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ship Plating Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uR",
			icon : "terran/shipplating3",
			time : 22000,
			conditions :
			[ "Ship Plating Level 2" ],
			need :
			[
			{
				name : "Armory",
				error : "All armories busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Nitro Packs",
			section : "upgrade",
			kind : "upgrade",
			save : "uS",
			icon : "terran/nitropacks",
			time : 10000,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Hi-Sec Auto Tracking",
			section : "upgrade",
			kind : "upgrade",
			save : "uT",
			icon : "terran/hisecautotracking",
			time : 8000,
			conditions :
			[ "Engineering Bay" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "250mm Strike Cannons",
			section : "upgrade",
			kind : "upgrade",
			save : "uU",
			icon : "terran/250mmstrikecannons",
			time : 11000,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Cloaking Field",
			section : "upgrade",
			kind : "upgrade",
			save : "uV",
			icon : "terran/cloakingfield",
			time : 11000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Concussive Shells",
			section : "upgrade",
			kind : "upgrade",
			save : "uW",
			icon : "terran/concussiveshells",
			time : 6000,
			conditions :
			[ "Barracks", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Personal Cloaking",
			section : "upgrade",
			kind : "upgrade",
			save : "uX",
			icon : "terran/personalcloaking",
			time : 12000,
			conditions :
			[ "Ghost Academy" ],
			need :
			[
			{
				name : "Ghost Academy",
				error : "All ghost academies busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Seeker Missile",
			section : "upgrade",
			kind : "upgrade",
			save : "uY",
			icon : "terran/seekermissile",
			time : 11000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Siege Tech",
			section : "upgrade",
			kind : "upgrade",
			save : "uZ",
			icon : "terran/siegetech",
			time : 8000,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Stimpack",
			section : "upgrade",
			kind : "upgrade",
			save : "iK",
			icon : "terran/stimpack",
			time : 17000,
			conditions :
			[ "Barracks", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Weapon Refit",
			section : "upgrade",
			kind : "upgrade",
			save : "iL",
			icon : "terran/weaponrefit",
			time : 6000,
			conditions :
			[ "Fusion Core" ],
			need :
			[
			{
				name : "Fusion Core",
				error : "All fusion cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Behemoth Reactor",
			section : "upgrade",
			kind : "upgrade",
			save : "iM",
			icon : "terran/behemothreactor",
			time : 8000,
			conditions :
			[ "Fusion Core" ],
			need :
			[
			{
				name : "Fusion Core",
				error : "All fusion cores busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Caduceus Reactor",
			section : "upgrade",
			kind : "upgrade",
			save : "iN",
			icon : "terran/caduceusreactor",
			time : 8000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Corvid Reactor",
			section : "upgrade",
			kind : "upgrade",
			save : "iO",
			icon : "terran/corvidreactor",
			time : 11000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Moebius Reactor",
			section : "upgrade",
			kind : "upgrade",
			save : "iP",
			icon : "terran/moebiusreactor",
			time : 8000,
			conditions :
			[ "Ghost Academy" ],
			need :
			[
			{
				name : "Ghost Academy",
				error : "All ghost academies busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Building Armor",
			section : "upgrade",
			kind : "upgrade",
			save : "iQ",
			icon : "terran/buildingarmor",
			time : 14000,
			conditions :
			[ "Engineering Bay" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Combat Shield",
			section : "upgrade",
			kind : "upgrade",
			save : "iR",
			icon : "terran/combatshield",
			time : 11000,
			conditions :
			[ "Barracks", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Durable Materials",
			section : "upgrade",
			kind : "upgrade",
			save : "iS",
			icon : "terran/durablematerials",
			time : 11000,
			conditions :
			[ "Starport", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Infernal Pre-Igniter",
			section : "upgrade",
			kind : "upgrade",
			save : "iT",
			icon : "terran/infernalpreigniter",
			time : 11000,
			conditions :
			[ "Factory", "Tech Lab" ],
			need :
			[
			{
				name : "Tech Lab Research",
				error : "All tech labs busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Neosteel Frame",
			section : "upgrade",
			kind : "upgrade",
			save : "iU",
			icon : "terran/neosteelframe",
			time : 11000,
			conditions :
			[ "Engineering Bay" ],
			need :
			[
			{
				name : "Engineering Bay",
				error : "All engineering bays busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		} ]
	},
	{
		name : "Zerg",
		save : "Z",
		entities :
		[
		{
			name : "Minerals",
			section : "resource",
			kind : "resource",
			icon : "zerg/minerals",
			start : 50,
			style : "resource"
		},
		{
			name : "Gas",
			section : "resource",
			kind : "resource",
			icon : "zerg/gas",
			style : "resource"
		},
		{
			name : "Larva",
			section : "resource",
			kind : "resource",
			icon : "zerg/larva",
			start : 3,
			multi : "Larva Spawner",
			cap : 19,
			style : "normal"
		},
		{
			name : "Food",
			section : "resource",
			kind : "hidden",
			start : 6,
			style : "hidden"
		},
		{
			name : "Energy",
			section : "resource",
			kind : "resource",
			icon : "zerg/energy",
			multi : "Energy Spawner",
			cap : 200,
			style : "resource"
		},
		{
			name : "Supply",
			section : "resource",
			kind : "resource",
			icon : "zerg/supply",
			start : 10,
			cap : 200,
			style : "supply"
		},
		{
			name : "Energy Spawner",
			section : "resource",
			kind : "hidden",
			time : 889,
			autocheck : true,
			products :
			[
			{
				name : "Energy",
				amount : 5
			} ],
			atmost :
			{
				name : "Energy",
				amount : 200,
				error : "Energy full."
			},
			style : "hidden"
		},
		{
			name : "Larva Spawner",
			section : "resource",
			kind : "hidden",
			time : 1500,
			start : 1,
			autocheck : true,
			products :
			[
			{
				name : "Larva",
				amount : 1
			} ],
			atmost :
			{
				name : "Larva",
				amount : 2,
				error : "Too many larvaes."
			},
			style : "hidden"
		},
		{
			name : "Gas Geyser",
			section : "resource",
			kind : "hidden",
			start : 2,
			style : "hidden"
		},
		{
			name : "Fast Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 545,
			autocheck : true,
			need :
			[
			{
				name : "Gas Drone",
				error : "No gas drone available"
			},
			{
				name : "Fast Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gas Patch",
			section : "resource",
			kind : "hidden",
			time : 857,
			autocheck : true,
			need :
			[
			{
				name : "Gas Drone",
				error : "No gas drone available"
			},
			{
				name : "Slow Gas Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Gas",
				amount : 4
			} ],
			style : "hidden"
		},
		{
			name : "Gas Space",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Fast Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			start : 16,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Drone",
				error : "No drone available"
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Slow Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			start : 8,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Drone",
				error : "No drone available"
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 5
			} ],
			style : "hidden"
		},
		{
			name : "Fast Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 714,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Drone",
				error : "No drone available"
			},
			{
				name : "Fast Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Slow Gold Mineral Patch",
			section : "resource",
			kind : "hidden",
			time : 1666,
			autocheck : true,
			need :
			[
			{
				name : "Mineral Drone",
				error : "No drone available"
			},
			{
				name : "Slow Mineral Patch",
				error : ""
			} ],
			products :
			[
			{
				name : "Minerals",
				amount : 7
			} ],
			style : "hidden"
		},
		{
			name : "Basic Hatchery",
			section : "resource",
			kind : "hidden",
			start : 1,
			style : "hidden"
		},
		{
			name : "Basic Lair",
			section : "resource",
			kind : "hidden",
			style : "hidden"
		},
		{
			name : "Drone",
			section : "worker",
			kind : "unit",
			save : "a",
			icon : "zerg/drone",
			time : 1700,
			start : 6,
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food available."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			} ],
			products :
			[
			{
				name : "Drone",
				amount : 1
			},
			{
				name : "Mineral Drone",
				amount : 1
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "nonumber"
		},
		{
			name : "Mineral Drone",
			section : "special",
			kind : "special",
			save : "iB",
			icon : "zerg/mineraldrone",
			time : 100,
			start : 6,
			costs :
			[
			{
				name : "Gas Space",
				amount : -1,
				error : "No gas space available"
			},
			{
				name : "Gas Drone",
				amount : 1,
				error : "No gas drone available."
			} ],
			products :
			[
			{
				name : "Mineral Drone",
				amount : 1
			} ],
			adding : "Mineral Drone",
			addsto : "2 x Mineral Drone",
			style : "instant"
		},
		{
			name : "2 x Mineral Drone",
			section : "special",
			kind : "hidden",
			save : "iC",
			icon : "zerg/mineraldrone",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -2,
				error : "No gas space available."
			},
			{
				name : "Gas Drone",
				amount : 2,
				error : "No gas drones available."
			} ],
			products :
			[
			{
				name : "Mineral Drone",
				amount : 2
			} ],
			adding : "Mineral Drone",
			addsto : "3 x Mineral Drone",
			style : "instant"
		},
		{
			name : "3 x Mineral Drone",
			section : "special",
			kind : "hidden",
			save : "b",
			icon : "zerg/mineraldrone",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : -3,
				error : "No gas space available."
			},
			{
				name : "Gas Drone",
				amount : 3,
				error : "No gas drones available."
			} ],
			products :
			[
			{
				name : "Mineral Drone",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Gas Drone",
			section : "special",
			kind : "special",
			save : "iD",
			icon : "zerg/gasdrone",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 1,
				error : "No gas space available"
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "No mineral drone available."
			} ],
			products :
			[
			{
				name : "Gas Drone",
				amount : 1
			} ],
			adding : "Gas Drone",
			addsto : "2 x Gas Drone",
			style : "instant"
		},
		{
			name : "2 x Gas Drone",
			section : "special",
			kind : "hidden",
			save : "iE",
			icon : "zerg/gasdrone",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 2,
				error : "No gas space available."
			},
			{
				name : "Mineral Drone",
				amount : 2,
				error : "No mineral drones available."
			} ],
			products :
			[
			{
				name : "Gas Drone",
				amount : 2
			} ],
			adding : "Gas Drone",
			addsto : "3 x Gas Drone",
			style : "instant"
		},
		{
			name : "3 x Gas Drone",
			section : "special",
			kind : "hidden",
			save : "c",
			icon : "zerg/gasdrone",
			time : 100,
			costs :
			[
			{
				name : "Gas Space",
				amount : 3,
				error : "No gas space available."
			},
			{
				name : "Mineral Drone",
				amount : 3,
				error : "No mineral drones available."
			} ],
			products :
			[
			{
				name : "Gas Drone",
				amount : 3
			} ],
			style : "instant"
		},
		{
			name : "Go out with Drone",
			section : "special",
			kind : "special",
			save : "d",
			icon : "zerg/scout_out",
			time : 100,
			costs :
			[
			{
				name : "Mineral Drone",
				amount : 1,
				error : "No drone available"
			} ],
			style : "action"
		},
		{
			name : "Return Drone",
			section : "special",
			kind : "special",
			save : "e",
			icon : "zerg/scout_in",
			time : 100,
			costs :
			[
			{
				name : "Go out with Drone",
				amount : 1,
				error : "No drone is out."
			} ],
			products :
			[
			{
				name : "Mineral Drone",
				amount : 1
			} ],
			style : "action"
		},
		{
			name : "Pause",
			section : "pause",
			kind : "special",
			save : "p",
			icon : "pause",
			time : 100,
			delay : true,
			style : "pause"
		},
		{
			name : "Spawn Larva",
			section : "special",
			kind : "special",
			save : "f",
			icon : "zerg/spawnlarva",
			time : 4000,
			conditions :
			[ "Queen" ],
			need :
			[
			{
				name : "Larva Spawner",
				error : "All hatcheries spawning larvaes"
			} ],
			costs :
			[
			{
				name : "Energy",
				amount : 25,
				error : "Not enough energy"
			} ],
			products :
			[
			{
				name : "Larva",
				amount : 4
			} ],
			style : "normal"
		},
		{
			name : "Overlord",
			section : "worker",
			kind : "unit",
			save : "j",
			icon : "zerg/overlord",
			time : 2500,
			start : 1,
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			} ],
			products :
			[
			{
				name : "Overlord",
				amount : 1
			},
			{
				name : "Supply",
				amount : 8
			} ],
			style : "normal"
		},
		{
			name : "Queen",
			section : "worker",
			kind : "unit",
			save : "h",
			icon : "zerg/queen",
			time : 5000,
			conditions :
			[ "Spawning Pool" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			products :
			[
			{
				name : "Queen",
				amount : 1
			},
			{
				name : "Energy Spawner",
				amount : 1
			},
			{
				name : "Energy",
				amount : 25
			} ],
			style : "normal"
		},
		{
			name : "Zergling",
			section : "unit",
			kind : "unit",
			save : "k",
			icon : "zerg/zergling",
			time : 2400,
			conditions :
			[ "Spawning Pool" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -1,
				error : "Not enough food available."
			} ],
			products :
			[
			{
				name : "Zergling",
				amount : 2
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Roach",
			section : "unit",
			kind : "unit",
			save : "l",
			icon : "zerg/roach",
			time : 2700,
			conditions :
			[ "Roach Warren" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 75,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Hydralisk",
			section : "unit",
			kind : "unit",
			save : "m",
			icon : "zerg/hydralisk",
			time : 3300,
			conditions :
			[ "Hydralisk Den" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Infestor",
			section : "unit",
			kind : "unit",
			save : "n",
			icon : "zerg/infestor",
			time : 5000,
			conditions :
			[ "Infestation Pit" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Overseer",
			section : "unit",
			kind : "unit",
			save : "q",
			icon : "zerg/overseer",
			time : 1700,
			conditions :
			[ "Lair" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 50,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Overlord",
				amount : 1,
				error : "No Overlord available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Mutalisk",
			section : "unit",
			kind : "unit",
			save : "r",
			icon : "zerg/mutalisk",
			time : 3300,
			conditions :
			[ "Spire" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Corruptor",
			section : "unit",
			kind : "unit",
			save : "s",
			icon : "zerg/corruptor",
			time : 4000,
			conditions :
			[ "Spire" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Baneling",
			section : "unit",
			kind : "unit",
			save : "t",
			icon : "zerg/baneling",
			time : 2000,
			conditions :
			[ "Baneling Nest" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 25,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 25,
				error : "Not enough vespene gas."
			},
			{
				name : "Zergling",
				amount : 1,
				error : "No Zergling available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Ultralisk",
			section : "unit",
			kind : "unit",
			save : "v",
			icon : "zerg/ultralisk",
			time : 5500,
			conditions :
			[ "Ultralisk Cavern" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Larva",
				amount : 1,
				error : "No larva available."
			},
			{
				name : "Food",
				amount : -6,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Brood Lord",
			section : "unit",
			kind : "unit",
			save : "w",
			icon : "zerg/broodlord",
			time : 3400,
			conditions :
			[ "Greater Spire" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Corruptor",
				amount : 1,
				error : "No Corruptor available."
			},
			{
				name : "Food",
				amount : -2,
				error : "Not enough food available."
			} ],
			atmost :
			{
				name : "Food",
				as : "Supply",
				error : "Not enough food."
			},
			style : "normal"
		},
		{
			name : "Hatchery",
			section : "building",
			kind : "building",
			save : "oA",
			icon : "zerg/hatchery",
			time : 10000,
			start : 1,
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			products :
			[
			{
				name : "Larva Spawner",
				amount : 1
			},
			{
				name : "Hatchery",
				amount : 1
			},
			{
				name : "Basic Hatchery",
				amount : 1
			},
			{
				name : "Fast Mineral Patch",
				amount : 16
			},
			{
				name : "Slow Mineral Patch",
				amount : 8
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Lair",
			section : "building",
			kind : "building",
			save : "oB",
			icon : "zerg/lair",
			time : 8000,
			conditions :
			[ "Spawning Pool" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Basic Hatchery",
				amount : 1,
				error : "All hatcheries have been upgraded."
			} ],
			products :
			[
			{
				name : "Lair",
				amount : 1
			},
			{
				name : "Basic Lair",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Hive",
			section : "building",
			kind : "building",
			save : "oC",
			icon : "zerg/hive",
			time : 10000,
			conditions :
			[ "Infestation Pit" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			},
			{
				name : "Basic Lair",
				amount : 1,
				error : "All lairs have been upgraded."
			} ],
			style : "normal"
		},
		{
			name : "Extractor",
			section : "building",
			kind : "building",
			save : "oD",
			icon : "zerg/extractor",
			time : 3000,
			costs :
			[
			{
				name : "Gas Geyser",
				amount : 1,
				error : "No gas Geyser available."
			},
			{
				name : "Minerals",
				amount : 25,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			products :
			[
			 {
				name: "Extractor" 
			 },
			{
				name : "Gas Space",
				amount : 3
			},
			{
				name : "Fast Gas Patch",
				amount : 2
			},
			{
				name : "Slow Gas Patch",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Extractor Trick",
			section : "building",
			kind : "building",
			save : "oE",
			icon : "zerg/extractortrick",
			time : 300,
			costs :
			[
			{
				name : "Gas Geyser",
				amount : 1,
				error : "No gas Geyser available."
			},
			{
				name : "Minerals",
				amount : 25,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			products :
			[
			{
				name : "Gas Geyser",
				amount : 1
			},
			{
				name : "Minerals",
				amount : 19
			},
			{
				name : "Drone",
				amount : 1
			},
			{
				name : "Mineral Drone",
				amount : 1
			},
			{
				name : "Food",
				amount : 1
			} ],
			style : "normal"
		},
		{
			name : "Spawning Pool",
			section : "building",
			kind : "building",
			save : "oF",
			icon : "zerg/spawningpool",
			time : 6500,
			conditions :
			[ "Hatchery" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Evolution Chamber",
			section : "building",
			kind : "building",
			save : "oG",
			icon : "zerg/evolutionchamber",
			time : 3500,
			conditions :
			[ "Hatchery" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 75,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Roach Warren",
			section : "building",
			kind : "building",
			save : "oH",
			icon : "zerg/roachwarren",
			time : 5500,
			conditions :
			[ "Spawning Pool" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Hydralisk Den",
			section : "building",
			kind : "building",
			save : "oI",
			icon : "zerg/hydraliskden",
			time : 4000,
			conditions :
			[ "Lair" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Spine Crawler",
			section : "building",
			kind : "building",
			save : "oJ",
			icon : "zerg/spinecrawler",
			time : 5000,
			conditions :
			[ "Spawning Pool" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Spore Crawler",
			section : "building",
			kind : "building",
			save : "oK",
			icon : "zerg/sporecrawler",
			time : 3000,
			conditions :
			[ "Evolution Chamber" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 75,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Baneling Nest",
			section : "building",
			kind : "building",
			save : "oL",
			icon : "zerg/banelingnest",
			time : 6000,
			conditions :
			[ "Spawning Pool" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 50,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Infestation Pit",
			section : "building",
			kind : "building",
			save : "oM",
			icon : "zerg/infestationpit",
			time : 5000,
			conditions :
			[ "Lair" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Spire",
			section : "building",
			kind : "building",
			save : "oN",
			icon : "zerg/spire",
			time : 10000,
			conditions :
			[ "Lair" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Ultralisk Cavern",
			section : "building",
			kind : "building",
			save : "oO",
			icon : "zerg/ultraliskcavern",
			time : 6500,
			conditions :
			[ "Hive" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Nydus Network",
			section : "building",
			kind : "building",
			save : "oP",
			icon : "zerg/nydusnetwork",
			time : 5000,
			conditions :
			[ "Lair" ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			style : "normal"
		},
		{
			name : "Nydus Worm",
			section : "building",
			kind : "building",
			save : "oQ",
			icon : "zerg/nydusworm",
			time : 2000,
			conditions :
			[ "Nydus Network" ],
			need :
			[
			{
				name : "Nydus Network",
				error : "All nydus networks busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Greater Spire",
			section : "building",
			kind : "building",
			save : "oR",
			icon : "zerg/greaterspire",
			time : 10000,
			conditions :
			[ "Spire", "Hive" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "normal"
		},
		{
			name : "Spawn Creep Tumor",
			section : "special",
			kind : "building",
			save : "g",
			icon : "zerg/creeptumor",
			time : 100,
			conditions :
			[ "Queen" ],
			costs :
			[
			{
				name : "Energy",
				amount : 25,
				error : "Not enough energy"
			} ],
			style : "instant"
		},
		{
			name : "Hatchery in Base",
			section : "building",
			kind : "building",
			save : "oS",
			icon : "zerg/hatchery",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			products :
			[
			{
				name : "Larva Spawner",
				amount : 1
			},
			{
				name : "Hatchery",
				amount : 1
			},
			{
				name : "Basic Hatchery",
				amount : 1
			},
			{
				name : "Supply",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Gold Expansion",
			section : "building",
			kind : "building",
			save : "oT",
			icon : "zerg/goldexpansion",
			time : 10000,
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Mineral Drone",
				amount : 1,
				error : "Not enough drones."
			},
			{
				name : "Food",
				amount : 1,
				error : "Not enough food."
			} ],
			products :
			[
			{
				name : "Larva Spawner",
				amount : 1
			},
			{
				name : "Hatchery",
				amount : 1
			},
			{
				name : "Basic Hatchery",
				amount : 1
			},
			{
				name : "Fast Gold Mineral Patch",
				amount : 12
			},
			{
				name : "Slow Gold Mineral Patch",
				amount : 6
			},
			{
				name : "Gas Geyser",
				amount : 2
			},
			{
				name : "Supply",
				amount : 2
			} ],
			style : "normal"
		},
		{
			name : "Burrow",
			section : "upgrade",
			kind : "upgrade",
			save : "uA",
			icon : "zerg/burrow",
			time : 10000,
			conditions :
			[ "Lair" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Pneumatized Carapace",
			section : "upgrade",
			kind : "upgrade",
			save : "uB",
			icon : "zerg/pneumatizedcarapace",
			time : 6000,
			conditions :
			[ "Lair" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ventral Sacs",
			section : "upgrade",
			kind : "upgrade",
			save : "uC",
			icon : "zerg/ventralsacs",
			time : 13000,
			conditions :
			[ "Lair" ],
			need :
			[
			{
				name : "Hatchery",
				error : "All hatcheries busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Metabolic Boost",
			section : "upgrade",
			kind : "upgrade",
			save : "uD",
			icon : "zerg/metabolicboost",
			time : 11000,
			conditions :
			[ "Spawning Pool" ],
			need :
			[
			{
				name : "Spawning Pool",
				error : "All spawning pools busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Adrenal Glands",
			section : "upgrade",
			kind : "upgrade",
			save : "uE",
			icon : "zerg/adrenalglands",
			time : 13000,
			conditions :
			[ "Spawning Pool", "Hive" ],
			need :
			[
			{
				name : "Spawning Pool",
				error : "All spawning pools busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Tunneling Claws",
			section : "upgrade",
			kind : "upgrade",
			save : "uF",
			icon : "zerg/tunnelingclaws",
			time : 11000,
			conditions :
			[ "Roach Warren", "Lair" ],
			need :
			[
			{
				name : "Roach Warren",
				error : "All roach warrens busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Glial Reconstitution",
			section : "upgrade",
			kind : "upgrade",
			save : "uG",
			icon : "zerg/glialreconstitution",
			time : 11000,
			conditions :
			[ "Roach Warren", "Lair" ],
			need :
			[
			{
				name : "Roach Warren",
				error : "All roach warrens busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Centrifugal Hooks",
			section : "upgrade",
			kind : "upgrade",
			save : "uH",
			icon : "zerg/centrifugalhooks",
			time : 11000,
			conditions :
			[ "Baneling Nest" ],
			need :
			[
			{
				name : "Baneling Nest",
				error : "All baneling nests busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Grooved Spines",
			section : "upgrade",
			kind : "upgrade",
			save : "uI",
			icon : "zerg/groovedspines",
			time : 8000,
			conditions :
			[ "Hydralisk Den" ],
			need :
			[
			{
				name : "Hydralisk Den",
				error : "All hydralisk dens busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Neural Parasite",
			section : "upgrade",
			kind : "upgrade",
			save : "uJ",
			icon : "zerg/neuralparasite",
			time : 11000,
			conditions :
			[ "Infestation Pit" ],
			need :
			[
			{
				name : "Infestation Pit",
				error : "All infestation pits busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Pathogen Glands",
			section : "upgrade",
			kind : "upgrade",
			save : "uK",
			icon : "zerg/pathogenglands",
			time : 8000,
			conditions :
			[ "Infestation Pit" ],
			need :
			[
			{
				name : "Infestation Pit",
				error : "All infestation pits busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Chitinous Plating",
			section : "upgrade",
			kind : "upgrade",
			save : "uL",
			icon : "zerg/chitinousplating",
			time : 11000,
			conditions :
			[ "Ultralisk Cavern" ],
			need :
			[
			{
				name : "Ultralisk Cavern",
				error : "All ultralisk cavern busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Melee Attacks Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uM",
			icon : "zerg/meleeattacks1",
			time : 16000,
			conditions :
			[ "Evolution Chamber" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Melee Attacks Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uN",
			icon : "zerg/meleeattacks2",
			time : 19000,
			conditions :
			[ "Melee Attacks Level 1", "Lair" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Melee Attacks Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uO",
			icon : "zerg/meleeattacks3",
			time : 22000,
			conditions :
			[ "Melee Attacks Level 2", "Hive" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Missile Attacks Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uP",
			icon : "zerg/missileattacks1",
			time : 16000,
			conditions :
			[ "Evolution Chamber" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Missile Attacks Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uQ",
			icon : "zerg/missileattacks2",
			time : 19000,
			conditions :
			[ "Missile Attacks Level 1", "Lair" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Missile Attacks Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uR",
			icon : "zerg/missileattacks3",
			time : 22000,
			conditions :
			[ "Missile Attacks Level 2", "Hive" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 200,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 200,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Carapace Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uS",
			icon : "zerg/groundcarapace1",
			time : 16000,
			conditions :
			[ "Evolution Chamber" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Carapace Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uT",
			icon : "zerg/groundcarapace2",
			time : 19000,
			conditions :
			[ "Ground Carapace Level 1", "Lair" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 225,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 225,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Ground Carapace Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uU",
			icon : "zerg/groundcarapace3",
			time : 22000,
			conditions :
			[ "Ground Carapace Level 2", "Hive" ],
			need :
			[
			{
				name : "Evolution Chamber",
				error : "All evolution chambers busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Attacks Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uV",
			icon : "zerg/flyerattacks1",
			time : 16000,
			conditions :
			[ "Spire" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 100,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 100,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Attacks Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uW",
			icon : "zerg/flyerattacks2",
			time : 19000,
			conditions :
			[ "Flyer Attacks Level 1", "Lair" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 175,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 175,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Attacks Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "uX",
			icon : "zerg/flyerattacks3",
			time : 22000,
			conditions :
			[ "Flyer Attacks Level 2", "Hive" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 250,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 250,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Carapace Level 1",
			section : "upgrade",
			kind : "upgrade",
			save : "uY",
			icon : "zerg/flyercarapace1",
			time : 16000,
			conditions :
			[ "Spire" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 150,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 150,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Carapace Level 2",
			section : "upgrade",
			kind : "upgrade",
			save : "uZ",
			icon : "zerg/flyercarapace2",
			time : 19000,
			conditions :
			[ "Flyer Carapace Level 1", "Lair" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 225,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 225,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		},
		{
			name : "Flyer Carapace Level 3",
			section : "upgrade",
			kind : "upgrade",
			save : "iA",
			icon : "zerg/flyercarapace3",
			time : 22000,
			conditions :
			[ "Flyer Carapace Level 2", "Hive" ],
			need :
			[
			{
				name : "Spire",
				error : "All spires busy."
			} ],
			costs :
			[
			{
				name : "Minerals",
				amount : 300,
				error : "Not enough minerals."
			},
			{
				name : "Gas",
				amount : 300,
				error : "Not enough vespene gas."
			} ],
			style : "single"
		} ]
	} ]