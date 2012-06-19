var starcraft =
{
	factions :
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
};
var sc;
function sum(d)
{
	var b = d[0];
	for ( var c = 1; c < d.length; c = c + 1)
	{
		b = b + d[c]
	}
	return b
}
function max(d)
{
	var b = d[0];
	for ( var c = 1; c < d.length; c = c + 1)
	{
		b = Math.max(b, d[c])
	}
	return b
}
function maxIndexOf(b)
{
	var c = 0;
	if (b.length == 0)
	{
		return -1
	}
	for ( var a = 1; a < b.length; a = a + 1)
	{
		if (b[a] > b[c])
		{
			c = a
		}
	}
	return c
}
function minIndexOf(b)
{
	var c = 0;
	if (b.length == 0)
	{
		return -1
	}
	for ( var a = 1; a < b.length; a++)
	{
		if (b[a] < b[c])
		{
			c = a
		}
	}
	return c
}
function addZeros(b, a)
{
	var c = "" + b;
	while (c.length < a)
	{
		c = "0" + c
	}
	return c
}
function fixString(a)
{
	return a.replace(new RegExp("[ :]", "g"), "")
}
function StarcraftBuilder()
{
	this.startUp = function()
	{
		if (window.location.hash.length > 1 & window.location.hash[1] == "Z")
		{
			this.init("Zerg")
		} else
		{
			if (window.location.hash.length > 1
					& window.location.hash[1] == "P")
			{
				this.init("Protoss")
			} else
			{
				if (window.location.hash.length > 1
						& window.location.hash[1] == "T")
				{
					this.init("Terran")
				} else
				{
					window.location = "start.html"
				}
			}
		}
	};
	this.init = function(b)
	{
		factions = starcraft.factions;
		faction = null;
		for ( var c = 0; c < factions.length; c++)
		{
			if (factions[c].name == b)
			{
				faction = factions[c]
			}
		}
		if (!faction)
		{
			alert("Error: no faction: " + b);
			return
		}
		this.factionName = faction.name;
		$(
				"#workers,#specials,#units,#buildings,#upgrades,#resources,#build,#time,#pause,#worker,#special,#unit,#building,#upgrade")
				.html("");
		$("#backpage").css("opacity", 0.2);
		$("#tooltip_transparent").css("opacity", 0.8);
		$(".faction div.highlight").css("opacity", 0);
		$(".faction div.highlight").hover(function()
		{
			$(this).css("opacity", 0.3)
		}, function()
		{
			$(this).css("opacity", 0)
		});
		$("#build").append(
				$("<div></div>").addClass("space").attr("id", "orderSpace_-1")
						.attr("positionId", -1).bind("click", function()
						{
							sc.setPosition(-1)
						}).bind("dragover", function(d)
						{
							d.preventDefault();
							$(this).addClass("dropspace")
						}).bind("dragleave", function(d)
						{
							$(this).removeClass("dropspace")
						}).bind("drop", this.drop));
		this.mouseDown = 0;
		$(document).bind("mousedown", function(f)
		{
			evt = f || window.event;
			var d = evt.srcElement ? evt.srcElement : evt.target;
			if (d.id.substr(0, 14) == "orderHighlight")
			{
				return true
			} else
			{
				if (d.id == "time_overlay")
				{
					sc.mouseDown = 1
				}
			}
			return false
		}).bind("mouseup", function(d)
		{
			sc.mouseDown = 0
		}).bind("selectstart", function(d)
		{
			return false
		});
		this.entities = new Array();
		this.entitiesByKey = new Array();
		this.build = new Array();
		this.delays = new Array();
		this.food = new Array();
		this.eventualError = new Array();
		this.currentPosition = -1;
		for ( var a = 0; a < faction.entities.length; a++)
		{
			entity = faction.entities[a];
			this.entities[entity.name] = entity;
			this.entitiesByKey[entity.save] = entity;
			this.initEntity(entity);
			if (entity.style != "hidden")
			{
				buttonDiv = $("<div></div>");
				buttonDiv.addClass("button");
				buttonDiv.append($("<img></img>").attr("src",
						"images/" + entity.icon + ".png").attr("alt", "")
						.addClass("button"));
				if (entity.kind != "resource")
				{
					buttonDiv
							.append($("<div></div>")
									.addClass("highlight")
									.css("opacity", 0)
									.attr("id",
											"entity_" + fixString(entity.name))
									.data("entity", entity)
									.bind(
											"click",
											function()
											{
												sc
														.insertIntoBuild(
																$(this)
																		.data(
																				"entity"),
																$(this)
																		.data(
																				"entity").section == "pause" ? 1
																		: 0,
																true)
											})
									.bind(
											"mouseover",
											function()
											{
												sc
														.showInfo(
																$(this)
																		.data(
																				"entity"),
																$(this)
																		.data(
																				"entity").currentError,
																685,
																$(this)
																		.parent()
																		.position().top
																		+ $(
																				this)
																				.parent()
																				.parent()
																				.position().top
																		+ 160,
																null, null)
											}).bind("mouseout", function()
									{
										sc.hideInfo()
									}))
				}
				buttonDiv.append($("<p></p>").attr("id",
						"entity_amount_" + fixString(entity.name)));
				$("#" + entity.kind + "s").append(buttonDiv)
			}
		}
		this.stopAtTime = -1;
		this.readBuild();
		this.updateCenter(false, false, 0, false);
		this.updateBuild(false)
	};
	this.showInfo = function(f, i, b, h, g, k)
	{
		$("#tooltip_header").html(f.name);
		$("#tooltip_icon").attr("src", "images/" + f.icon + ".png");
		cost = "";
		if (f.costs)
		{
			for ( var d in f.costs)
			{
				if (f.costs[d].name == "Minerals")
				{
					cost += '<img src="images/icons/minerals.png" alt="" width="16px"/>'
							+ f.costs[d].amount
				}
				if (f.costs[d].name == "Gas")
				{
					cost += '<img src="images/icons/'
							+ this.factionName.toLowerCase()
							+ 'gas.png" alt="" width="16px"/>'
							+ f.costs[d].amount
				}
				if (f.costs[d].name == "Energy")
				{
					cost += '<img src="images/icons/energy.png" alt="" width="16px"/>'
							+ f.costs[d].amount
				}
				if (f.costs[d].name == "Food" && f.costs[d].amount < 0)
				{
					cost += '<img src="images/icons/'
							+ this.factionName.toLowerCase()
							+ 'supply.png" alt="" width="16px"/>'
							+ (-f.costs[d].amount)
				}
			}
		}
		if (f.name == "Pause")
		{
			if (g != null)
			{
				cost += '<img src="images/icons/'
						+ this.factionName.toLowerCase()
						+ 'time.png" alt="" width="16px"/>'
						+ parseInt((k - g) / 100)
			} else
			{
				cost += '<img src="images/icons/'
						+ this.factionName.toLowerCase()
						+ 'time.png" alt="" width="16px"/>1'
			}
		} else
		{
			if (f.time)
			{
				cost += '<img src="images/icons/'
						+ this.factionName.toLowerCase()
						+ 'time.png" alt="" width="16px"/>' + f.time / 100;
				if (g)
				{
					var c = (parseInt(f.time / 100) - parseInt(k / 100) + parseInt(g / 100));
					if (c != 0)
					{
						cost += " (-" + c + ")"
					}
				}
			}
		}
		$("#tooltip_cost").html(cost);
		if (i && i != "")
		{
			$("#tooltip_error").html(
					'<img src="images/icons/warning.png" alt="" width="16px"/>'
							+ i);
			$("#tooltip_transparent").css("height", "130px");
			$("#tooltip_time").html("")
		} else
		{
			$("#tooltip_error").html("");
			if (g != null)
			{
				var l = addZeros((parseInt(g / 100) % 60), 2);
				var n = addZeros(parseInt((g / 100) / 60), 2);
				var m = addZeros((parseInt(k / 100) % 60), 2);
				var a = addZeros(parseInt((k / 100) / 60), 2);
				$("#tooltip_transparent").css("height", "130px");
				if (f.style != "instant" && f.style != "action")
				{
					$("#tooltip_time").html(n + ":" + l + " - " + a + ":" + m)
				} else
				{
					$("#tooltip_time").html(n + ":" + l)
				}
			} else
			{
				$("#tooltip_transparent").css("height", "100px");
				$("#tooltip_time").html("")
			}
		}
		$("#tooltip_transparent").css("left", b + "px");
		$("#tooltip_transparent").css("top", h + "px");
		$("#tooltip_window").css("left", b + "px");
		$("#tooltip_window").css("top", h + "px");
		$("#tooltip_transparent").css("visibility", "visible");
		$("#tooltip_window").css("visibility", "visible")
	};
	this.hideInfo = function()
	{
		$("#tooltip_transparent").css("visibility", "hidden");
		$("#tooltip_window").css("visibility", "hidden")
	};
	this.reset = function(a)
	{
		a.value =
		[ a.start ];
		a.idle = a.start
	};
	this.initEntity = function(a)
	{
		if (!a.start)
		{
			a.start = 0
		}
		if (!a.autocheck)
		{
			a.autocheck = false
		}
		if (!a.time)
		{
			a.time = 0
		}
		if (a.products)
		{
			for ( var b = 0; b < a.products.length; b++)
			{
				if (!a.products[b].name)
				{
					a.products[b].name = a.name
				}
				if (!a.products[b].amount)
				{
					a.products[b].amount = 1
				}
			}
		} else
		{
			a.products =
			[
			{
				name : a.name,
				amount : 1
			} ]
		}
		this.reset(a)
	};
	this.readBuild = function()
	{
		var f = window.location.hash.length;
		for ( var c = 2; c < f; c = c + 1)
		{
			var d = window.location.hash[c];
			if ("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(d) != -1)
			{
				continue
			}
			if ("yuio".indexOf(d) != -1)
			{
				if (c >= window.location.hash.length)
				{
					continue
				}
				d += window.location.hash[(parseInt(c) + 1)]
			}
			var a = this.entitiesByKey[d];
			if (a)
			{
				if (d == "p")
				{
					var b = Math.min(this.startingNumberOf(
							window.location.hash, parseInt(c) + 1), 200);
					this.insertIntoBuild(a, b, false)
				} else
				{
					this.insertIntoBuild(a, 0, false)
				}
			}
		}
	};
	this.startingNumberOf = function(b, a)
	{
		number = 0;
		while (a < b.length && "0123456789".indexOf(b[a]) != -1)
		{
			number = 10 * number + parseInt(b[a]);
			a += 1
		}
		return number
	};
	this.exportBuild = function(c)
	{
		str = "";
		for ( var b = 0; b < this.build.length; b++)
		{
			var a = this.build[b];
			if (a.style != "nonumber" && this.food[b] && this.food[b] != "")
			{
				str += this.food[b] + " : " + this.build[b].name + "\n"
			}
		}
		prompt("Copy your build here:", str)
	};
	this.updateBuild = function(a)
	{
		for ( var c = -1; c < this.build.length; c++)
		{
			if (c >= 0)
			{
				if (!$("#order_" + c).length)
				{
					$("#build")
							.append(
									$("<div></div>")
											.addClass("order")
											.css("left", c * 61 + 8 + "px")
											.attr("id", "order_" + c)
											.attr("draggable", true)
											.bind(
													"dragstart",
													function(g)
													{
														g.originalEvent.dataTransfer
																.setData(
																		"Text",
																		$(this)
																				.attr(
																						"id"));
														$(this).addClass(
																"draggedOrder");
														$(this).css("opacity",
																0.4);
														return true
													})
											.bind(
													"dragend",
													function(g)
													{
														$(this).removeClass(
																"draggedOrder");
														$(this).css("opacity",
																1);
														return false
													})
											.append(
													$("<img></img>").attr("id",
															"orderImage_" + c))
											.append(
													$("<div></div>")
															.attr(
																	"id",
																	"orderHighlight_"
																			+ c)
															.attr("positionId",
																	c)
															.bind(
																	"click",
																	function(g)
																	{
																		sc
																				.removeOrder(
																						g,
																						$(
																								this)
																								.attr(
																										"positionId"),
																						true,
																						false)
																	})
															.bind(
																	"mouseover",
																	function(g)
																	{
																		sc
																				.highlight(
																						$(
																								this)
																								.attr(
																										"positionId"),
																						1)
																	})
															.bind(
																	"mouseout",
																	function(g)
																	{
																		sc
																				.lowlight(
																						$(
																								this)
																								.attr(
																										"positionId"),
																						true)
																	})).append(
													$("<p></p>").attr(
															"id",
															"order_caption_"
																	+ c).css(
															"opacity", 0.7)))
							.append(
									$("<div></div>").addClass("space").attr(
											"id", "orderSpace_" + c).attr(
											"positionId", c).css("left",
											(c * 61 + 61) + "px").bind(
											"click",
											function()
											{
												sc.setPosition(parseInt($(this)
														.attr("positionId")))
											}).bind("dragover", function(g)
									{
										g.preventDefault();
										$(this).addClass("dropspace");
										return false
									}).bind("dragleave", function(g)
									{
										$(this).removeClass("dropspace");
										return false
									}).bind("drop", this.drop))
				}
				var b = this.build[c];
				$("#orderImage_" + c).attr("src", "images/" + b.icon + ".png");
				if ($("#actionHighlight_" + c).length
						&& $("#actionHighlight_" + c).attr("error") != "")
				{
					$("#orderHighlight_" + c).addClass("disabled_order")
							.removeClass("highlight").css("opacity", 0.7)
				} else
				{
					$("#orderHighlight_" + c).removeClass("disabled_order")
							.addClass("highlight").css("opacity", 0)
				}
				if (b.style != "nonumber" && this.food[c] && this.food[c] != "")
				{
					$("#order_caption_" + c).html(this.food[c]).css(
							"visibility", "visible")
				} else
				{
					$("#order_caption_" + c).html("").css("visibility",
							"hidden")
				}
				this.lowlight(c)
			}
			if (c == this.currentPosition)
			{
				$("#orderSpace_" + c).addClass("currentSpace")
			} else
			{
				$("#orderSpace_" + c).removeClass("currentSpace")
			}
			$("#orderSpace_" + c).removeClass("dropspace")
		}
		if (a)
		{
			buildDiv = $("#build_window");
			minimum = this.currentPosition * 61 + 61 - 450;
			maximum = this.currentPosition * 61 + 61 - 100;
			if (buildDiv.scrollLeft() < minimum)
			{
				buildDiv.scrollLeft(minimum)
			}
			if (buildDiv.scrollLeft() > maximum)
			{
				buildDiv.scrollLeft(maximum)
			}
		}
		var f = faction.save;
		for ( var c in this.build)
		{
			var d = this.build[c].save;
			f += d;
			if (d == "p")
			{
				f += this.delays[c]
			}
		}
		if ("#" + f != window.location.hash)
		{
			history.replaceState(
			{}, "", "#" + f)
		}
	};
	this.drop = function(c)
	{
		evt = c || window.event;
		var b = evt.originalEvent.dataTransfer.getData("Text");
		from = parseInt(b.substr(6, b.length - 6));
		to = parseInt(this.id.substr(11, this.id.length - 11));
		if (from == to)
		{
			return
		}
		draggingOrder = sc.build[from];
		draggingDelay = sc.delays[from];
		var a = sc.build.length;
		sc.removeOrder(null, from, false, true);
		sc.currentPosition = to;
		if (to > from)
		{
			sc.currentPosition = to - (a - sc.build.length)
		}
		sc.insertIntoBuild(draggingOrder, draggingDelay, false);
		if (to < from)
		{
			sc.currentPosition -= 1
		}
		sc.updateCenter(true, false, Math.min(from, to), false);
		sc.updateBuild(true);
		return false
	};
	this.removeOrder = function(c, a, f, d)
	{
		evt = c || window.event;
		if (this.build[a].section == "pause" && this.delays[a] > 1
				&& !evt.shiftKey && !d)
		{
			this.delays[a] = this.delays[a] - 1;
			this.updateCenter(true, false, a, false);
			this.updateBuild(false)
		} else
		{
			this.build.splice(a, 1);
			this.delays.splice(a, 1);
			if (this.currentPosition >= a)
			{
				this.currentPosition -= 1
			}
			this.stopAtTime = -1;
			if (a > 0 && a < this.build.length
					&& this.build[a].section == "pause"
					&& this.build[a - 1].section == "pause")
			{
				this.delays[a - 1] += this.delays[a];
				this.removeOrder(c, a, f, true)
			}
			if (f)
			{
				this.updateCenter(true, false, a, false);
				this.updateBuild(false)
			}
			var b = this.build.length;
			while (true)
			{
				if (!$("#order_" + b).length)
				{
					break
				}
				$("#order_" + b).remove();
				$("#orderSpace_" + b).remove();
				b = b + 1
			}
		}
	};
	this.insertIntoBuild = function(b, a, c)
	{
		this.stopAtTime = -1;
		if (b.section == "pause")
		{
			if (this.currentPosition >= 0
					&& this.build[this.currentPosition].section == "pause")
			{
				this.delays[this.currentPosition] += a
			} else
			{
				if (this.currentPosition < (this.build.length - 1)
						&& this.build[(this.currentPosition + 1)].section == "pause")
				{
					this.delays[this.currentPosition + 1] += a
				} else
				{
					this.currentPosition += 1;
					this.build.splice(this.currentPosition, 0, b);
					this.delays.splice(this.currentPosition, 0, a)
				}
			}
		} else
		{
			if (this.currentPosition >= 0
					&& this.build[this.currentPosition].adding
					&& this.build[this.currentPosition].adding == b.name)
			{
				this.build.splice(this.currentPosition, 1,
						this.entities[this.build[this.currentPosition].addsto]);
				this.delays.splice(this.currentPosition, 1, 0)
			} else
			{
				this.currentPosition += 1;
				this.build.splice(this.currentPosition, 0, b);
				this.delays.splice(this.currentPosition, 0, 0)
			}
		}
		if (c)
		{
			this.updateCenter(true, false, this.currentPosition, false);
			this.updateBuild(true)
		}
	};
	this.setPosition = function(a)
	{
		$("#orderSpace_" + this.currentPosition).removeClass("currentSpace");
		this.currentPosition = a;
		$("#orderSpace_" + this.currentPosition).addClass("currentSpace");
		this.stopAtTime = -1;
		this.updateCenter(false, false, 0, true)
	};
	this.errorDoing = function(g, m, c)
	{
		if (g.style == "single" && g.value[m] > 0)
		{
			return "Already researched / built."
		}
		if (g.conditions)
		{
			for ( var h in g.conditions)
			{
				if (max(this.entities[g.conditions[h]].value) <= 0)
				{
					return g.conditions[h] + " needed."
				}
			}
		}
		if (g.need)
		{
			for ( var h = 0; h < g.need.length; h++)
			{
				if (this.entities[g.need[h].name].idle <= 0)
				{
					return g.need[h].error
				}
			}
		}
		var d = (g.name == "Slow Mineral Patch");
		var b = (g.name == "Slow Gold Mineral Patch");
		var a = (g.name == "Fast Mineral Patch");
		var l = (this.entities["Slow Gold Mineral Patch"].idle > 0);
		var k = (this.entities["Fast Mineral Patch"].idle > 0);
		var i = (this.entities["Fast Gold Mineral Patch"].idle > 0);
		if ((d && (l || k || i)) || (b && (k || i)) || (a && i))
		{
			return "Faster patch available."
		}
		if (g.name == "Slow Gas Patch"
				&& this.entities["Fast Gas Patch"].idle > 0)
		{
			return "Faster patch available."
		}
		var f = 0;
		if (g.costs)
		{
			for ( var h in g.costs)
			{
				if (c)
				{
					if (g.costs[h].name == "Minerals"
							&& this.entities["Mineral Drone"]
							&& this.entities["Mineral Drone"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Minerals"
							&& this.entities["Mineral Probe"]
							&& this.entities["Mineral Probe"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Minerals"
							&& this.entities["Mineral SCV"]
							&& this.entities["Mineral SCV"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Gas" && this.entities["Gas Drone"]
							&& this.entities["Gas Drone"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Gas" && this.entities["Gas Probe"]
							&& this.entities["Gas Probe"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Gas" && this.entities["Gas SCV"]
							&& this.entities["Gas SCV"].value[0] > 0)
					{
						continue
					}
					if (g.costs[h].name == "Larva")
					{
						continue
					}
					if (g.costs[h].name == "Energy"
							&& this.entities["Energy Spawner"].value[0] > 0)
					{
						continue
					}
				}
				if (g.costs[h].name == "Energy" && g.name == "Chronoboost"
						&& this.chronoboost > 0)
				{
					if (max(this.entities.Energy.value) < g.costs[h].amount
							- this.chronoboost * 11.25 / 1000)
					{
						return g.costs[h].error
					}
				} else
				{
					if (max(this.entities[g.costs[h].name].value) < g.costs[h].amount)
					{
						return g.costs[h].error
					}
				}
				if (g.atmost && g.costs[h].name == g.atmost.name)
				{
					f = g.costs[h].amount
				}
			}
		}
		if (g.atmost)
		{
			if (g.atmost.amount)
			{
				if (this.entities[g.atmost.name].value[m] - f > g.atmost.amount)
				{
					return g.atmost.error
				}
			}
			if (g.atmost.as)
			{
				if (this.entities[g.atmost.name].value[m] - f > max(this.entities[g.atmost.as].value))
				{
					return g.atmost.error
				}
			}
		}
		return null
	};
	this.autoCheck = function(b, a)
	{
		error = this.errorDoing(b, a, false);
		if (error)
		{
			if (b.name == "Larva Spawner")
			{
				this.events.push(
				{
					event : "check",
					time : parseInt((this.currentTime + 100)),
					name : b.name,
					actInd : a,
					active : false
				})
			} else
			{
				this.events
						.push(
						{
							event : "check",
							time : parseInt((this.currentTime + parseInt(3 * b.time / 4))),
							name : b.name,
							actInd : a,
							active : false
						})
			}
			this.events = this.events.sort(function(d, c)
			{
				return c.time - d.time
			})
		} else
		{
			this.startDoing(b, b.time, a, false)
		}
	};
	this.startDoing = function(d, h, i, b)
	{
		if (d.costs)
		{
			for ( var f in d.costs)
			{
				var l = this.entities[d.costs[f].name];
				var a = d.costs[f].amount;
				var c = maxIndexOf(l.value);
				l.value[c] -= a;
				l.idle -= a;
				if (a < 0 && l.autocheck)
				{
					if (l.multi == d.name)
					{
						var g = i;
						if (!l.value[g])
						{
							l.value[g] = 0
						}
					} else
					{
						g = 0
					}
					for ( var k = 0; k < -a; k++)
					{
						this.autoCheck(l, l.value[g] - (-a) + k)
					}
				}
			}
		}
		if (d.need)
		{
			for ( var f in d.need)
			{
				this.entities[d.need[f].name].idle -= 1
			}
		}
		if (d.name == "Chronoboost")
		{
			this.chronoboost += 1000
		}
		if (b)
		{
			this.activeEvents += 1
		}
		this.events.push(
		{
			event : "execute",
			time : parseInt((this.currentTime + h)),
			name : d.name,
			actInd : i,
			active : b
		});
		this.events = this.events.sort(function(m, j)
		{
			return j.time - m.time
		})
	};
	this.finishDoing = function(g, d, h)
	{
		autocheckNeedError = false;
		if (g.need && g.autocheck)
		{
			for ( var a in g.need)
			{
				if (this.entities[g.need[a].name].idle < 0)
				{
					autocheckNeedError = true
				}
			}
		}
		if (g.products && !autocheckNeedError)
		{
			for ( var a in g.products)
			{
				var f = this.entities[g.products[a].name];
				var c = g.products[a].amount;
				if (f.multi == g.name)
				{
					useIndex = d;
					if (!f.value[useIndex])
					{
						f.value[useIndex] = 0
					}
				} else
				{
					useIndex = minIndexOf(f.value)
				}
				if (f.cap && f.value[useIndex] + c > f.cap)
				{
					c = f.cap - f.value[useIndex]
				}
				f.value[useIndex] += c;
				f.idle += c;
				if (f.autocheck)
				{
					for ( var b = 0; b < c; b++)
					{
						this.autoCheck(f, f.value[useIndex] - c + b)
					}
				}
			}
		}
		if (g.need)
		{
			for ( var a in g.need)
			{
				this.entities[g.need[a].name].idle += 1
			}
		}
		if (h)
		{
			this.activeEvents -= 1
		}
		if (g.autocheck)
		{
			this.autoCheck(g, d)
		}
	};
	this.setTime = function(a)
	{
		if (this.mouseDown == 1)
		{
			evt = a || window.event;
			this.stopAtTime = Math.max(100 * parseInt(((evt.clientX
					- $("#page").offset().left - 10) * 150 / 750 + $(
					"#center_window").scrollLeft() / 5)), 100);
			this.currentPosition = -2;
			this.updateCenter(false, false, 0, true)
		}
	};
	this.updateCenter = function(l, b, a, j)
	{
		if (!b)
		{
			this.updateCenter(l, true, a, j)
		}
		if (l)
		{
			for ( var k = a; k < this.build.length; k++)
			{
				this.eventualError[k] = null
			}
		}
		this.currentTime = 100;
		this.chronoboost = 0;
		this.chronoTarget = new Array();
		this.chronoAmount = new Array();
		this.chronoFinished = new Array();
		this.activeEvents = 0;
		var r = 20000;
		if (!b)
		{
			this.category = new Array();
			this.category.pause = new Array();
			this.category.worker = new Array();
			this.category.special = new Array();
			this.category.building = new Array();
			this.category.upgrade = new Array();
			this.category.unit = new Array()
		}
		this.events = new Array();
		for ( var k in this.entities)
		{
			action = this.entities[k];
			this.reset(action)
		}
		for ( var k in this.entities)
		{
			action = this.entities[k];
			if (action.autocheck && action.name != "Fast Mineral Patch"
					&& action.name != "Slow Mineral Patch")
			{
				for ( var q = 0; q < action.value[0]; q++)
				{
					this.autoCheck(action, 0)
				}
			}
		}
		for ( var k = 0; k < 16; k++)
		{
			this.events.push(
			{
				event : "check",
				time : parseInt(10 + ((k + 1) / 2) * 100),
				name : "Fast Mineral Patch",
				actInd : 0
			})
		}
		for ( var k = 0; k < 8; k++)
		{
			this.events.push(
			{
				event : "check",
				time : parseInt(1002 + k * 100),
				name : "Slow Mineral Patch",
				actInd : 0
			})
		}
		this.events = this.events.sort(function(i, c)
		{
			return c.time - i.time
		});
		if (!b && this.currentPosition == -1)
		{
			this.updateClock();
			this.updateAmounts()
		}
		for ( var k = 0; k < this.build.length; k++)
		{
			if (b
					&& ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition)))
			{
				break
			}
			action = this.build[k];
			var n = null;
			this.isDelayed = false;
			if (!this.eventualError[k])
			{
				do
				{
					if (n)
					{
						e = this.events.pop();
						if (this.stopAtTime != -1)
						{
							if (this.currentTime <= this.stopAtTime
									&& e.time > this.stopAtTime)
							{
								this.currentTime = this.stopAtTime;
								this.updateClock();
								this.updateAmounts();
								if (this.currentPosition == -2)
								{
									this.currentPosition = k - 1;
									this.updateBuild(true)
								}
							}
						}
						this.currentTime = e.time;
						if (e.event == "execute")
						{
							this.finishDoing(this.entities[e.name], e.actInd,
									e.active)
						}
						if (e.event == "check")
						{
							this.autoCheck(this.entities[e.name], e.actInd)
						}
						if (e.event == "start")
						{
							n = null;
							break
						}
					}
					n = this
							.errorDoing(action, maxIndexOf(action.value), false);
					eventualError = this.errorDoing(action,
							maxIndexOf(action.value), true);
					if (!n && k > 0 && this.delays[k - 1] > 0)
					{
						if (!this.isDelayed)
						{
							this.events
									.push(
									{
										event : "start",
										time : parseInt((this.currentTime + this.delays[k - 1] * 100)),
										name : action.name
									});
							this.events.sort(function(i, c)
							{
								return c.time - i.time
							});
							if (!b)
							{
								previousDiv = $("#action_" + (k - 1));
								previousDiv
										.css(
												"left",
												parseInt(((this.currentTime - this.delays[k] * 100) * 0.05))
														+ "px")
							}
							this.isDelayed = true
						}
						n = "Delaying."
					}
				} while (n && (this.activeEvents > 0 || !eventualError));
				actionTime = action.time;
				if (this.chronoboost > 0 && action.name != "Chronoboost"
						&& action.need && action.need.length > 0)
				{
					this.chronoAmount[this.chronoTarget.length] = this.chronoboost;
					this.chronoTarget[this.chronoTarget.length] = action.need[0].name;
					this.chronoboost = 0
				}
				for ( var m in this.chronoTarget)
				{
					if (action.need && action.need.length > 0
							&& action.need[0].name == this.chronoTarget[m])
					{
						if (this.chronoFinished[m]
								&& this.currentTime < this.chronoFinished[m])
						{
							continue
						}
						if (this.chronoFinished[m])
						{
							this.chronoAmount[m] = Math
									.max(
											this.chronoAmount[m]
													- (this.currentTime - this.chronoFinished[m])
													/ 2, 0)
						}
						if (actionTime < this.chronoAmount[m] * 3)
						{
							var o = parseInt(actionTime * 1 / 3);
							actionTime = actionTime - o;
							this.chronoAmount[m] = this.chronoAmount[m] - o;
							this.chronoFinished[m] = this.currentTime
									+ actionTime
						} else
						{
							actionTime = actionTime - this.chronoAmount[m];
							delete this.chronoTarget[m];
							delete this.chronoAmount[m];
							if (this.chronoFinished[m])
							{
								delete this.chronoFinished[m]
							}
						}
						break
					}
				}
				if (!(b && ((this.stopAtTime != -1 && this.currentTime > this.stopAtTime) || (this.stopAtTime == -1 && k > this.currentPosition))))
				{
					if (!n)
					{
						if (!b)
						{
							this.food[k] = this.entities.Food.value[0]
						}
						this.startDoing(action, actionTime, action.value[0],
								true)
					} else
					{
						this.eventualError[k] = n;
						this.updateCenter(false, false, a, j);
						this.food[k] = "";
						return
					}
				}
			} else
			{
				actionTime = action.time;
				n = this.eventualError[k]
			}
			if (!b && !j && action.name != "Chronoboost")
			{
				$("#action_" + k).remove();
				actionDiv = $("<div></div>");
				actionDiv.attr("id", "action_" + k);
				actionDiv.css("left", parseInt((this.currentTime * 0.05))
						+ "px");
				if (action.style == "instant" || action.style == "action")
				{
					actionDiv.css("width", "150px");
					actionDiv.addClass("action_event")
				} else
				{
					if (action.section == "pause")
					{
						actionDiv.css("width",
								(parseInt(this.delays[k] * 100 * 0.05) - 1)
										+ "px");
						actionDiv.addClass("pause")
					} else
					{
						actionDiv.css("width",
								(parseInt(actionTime * 0.05) - 1) + "px");
						actionDiv.addClass("action")
					}
				}
				if (action.section != "pause")
				{
					actionDiv.append($("<img></img>").attr("id",
							"actionImage_" + k).attr("src",
							"images/" + action.icon + ".png"));
					actionText = $("<p></p>").attr("id", "actionText_" + k);
					if (action.style != "notext"
							&& (actionTime > 1200 || (action.style == "instant" || action.style == "action")))
					{
						actionText.html(action.name)
					} else
					{
						actionText.html("")
					}
					actionDiv.append(actionText)
				}
				var h = 0;
				var d = null;
				if (k > 0 && this.delays[k - 1] > 0)
				{
					h = this.delays[k - 1];
					d = $("#action_" + (k - 1));
					pauseHighlight = $("#actionHighlight_" + (k - 1));
					pauseHighlight.attr("startTime", this.currentTime - 100
							* this.delays[k - 1]);
					pauseHighlight.attr("endTime", this.currentTime)
				}
				this.insertAction(action, actionDiv, h, d, actionTime);
				highlightDiv = $("<div></div>").addClass("highlight").attr(
						"id", "actionHighlight_" + k).attr("positionId", k)
						.bind(
								"click",
								function(c)
								{
									sc.removeOrder(c, $(this)
											.attr("positionId"), true, false)
								}).bind("mouseover", function(c)
						{
							sc.highlight($(this).attr("positionId"), 0)
						}).bind("mouseout", function(c)
						{
							sc.lowlight($(this).attr("positionId"))
						}).css("width",
								(parseInt(actionDiv.css("width")) + 2) + "px")
						.css("top", "-1px").css("left", "-1px").css("height",
								"26px").attr("startTime", this.currentTime)
						.attr("endTime", this.currentTime + actionTime);
				if (action.section == "pause")
				{
					highlightDiv.attr("endTime", this.currentTime
							+ this.delays[k] * 100)
				}
				actionDiv.append(highlightDiv);
				if (n)
				{
					highlightDiv.addClass("disabled");
					highlightDiv.removeClass("highlight");
					highlightDiv.attr("error", n)
				} else
				{
					highlightDiv.addClass("highlight");
					highlightDiv.removeClass("disabled");
					highlightDiv.attr("error", "")
				}
			}
			r = Math.max(r, this.currentTime + action.time, this.stopAtTime);
			if (!b && !j && action.name == "Chronoboost")
			{
				$("#action_" + k).remove();
				$("#chrono_action_" + k).remove()
			}
			if (!b && this.stopAtTime == -1 && k == this.currentPosition)
			{
				this.updateClock();
				this.updateAmounts()
			}
		}
		if (!b && !j)
		{
			k = this.build.length;
			while (true)
			{
				actionDiv = $("#action_" + k);
				if (!actionDiv.length)
				{
					break
				}
				$("#chrono_" + actionDiv.attr("id")).remove();
				actionDiv.remove();
				k++
			}
			totalHeight = 29;
			for ( var q in this.category)
			{
				k = this.category[q].length;
				while (true)
				{
					sectionDiv = $("#" + q + "_" + k);
					if (!sectionDiv.length)
					{
						break
					}
					sectionDiv.remove();
					k++
				}
				category = $("#" + q);
				if (category.length)
				{
					totalHeight += category.height()
				}
			}
			totalHeight = Math.max(totalHeight, 680);
			$("#timeLine").css("height", totalHeight + "px")
		}
		if (!b)
		{
			r = Math.max(r, this.currentTime, this.stopAtTime);
			$(".section").css("width", (parseInt(r * 0.05) + 300) + "px");
			timeSteps = Math.max((r / 2000) + 2, 7);
			for ( var k = 0; k < timeSteps; k++)
			{
				if (!$("#time_" + k).length)
				{
					var p = addZeros(((k + 1) % 3) * 20, 2);
					var f = addZeros(parseInt((k + 1) / 3), 2);
					$("#time").append(
							$("<div></div>").css("left", (k + 1) * 100 + "px")
									.addClass("time").attr("id", "time_" + k)
									.append(
											$("<span></span>")
													.html(f + ":" + p)
													.addClass("time_text")))
				}
			}
		}
		if (!b)
		{
			while (this.stopAtTime != -1 && this.currentTime <= this.stopAtTime
					&& this.events.length > 0)
			{
				if (this.currentPosition == -2)
				{
					this.currentPosition = this.build.length - 1;
					this.updateBuild(true)
				}
				e = this.events.pop();
				if (e.time > this.stopAtTime)
				{
					this.currentTime = this.stopAtTime;
					this.updateClock();
					this.updateAmounts();
					break
				}
				this.currentTime = e.time;
				if (e.event == "execute")
				{
					this.finishDoing(this.entities[e.name], e.actInd, e.active)
				}
				if (e.event == "check")
				{
					this.autoCheck(this.entities[e.name], e.actInd)
				}
			}
		} else
		{
			while (this.activeEvents > 0)
			{
				e = this.events.pop();
				this.currentTime = e.time;
				if (e.event == "execute")
				{
					this.finishDoing(this.entities[e.name], e.actInd, e.active)
				}
				if (e.event == "check")
				{
					this.autoCheck(this.entities[e.name], e.actInd)
				}
			}
			for ( var k in this.entities)
			{
				var g = this.entities[k];
				n = this.errorDoing(g, maxIndexOf(g.value), true);
				if (n)
				{
					g.eventualError = true;
					g.currentError = n
				} else
				{
					g.eventualError = false;
					g.currentError = ""
				}
			}
		}
	};
	this.highlight = function(c, b)
	{
		ah = $("#actionHighlight_" + c);
		oh = $("#orderHighlight_" + c);
		if (ah.length)
		{
			if (ah.is(".disabled"))
			{
				ah.css("opacity", "0.8")
			} else
			{
				ah.css("opacity", "0.4")
			}
		}
		if (b == 0)
		{
			var a = $("#center_window");
			this.showInfo(this.build[c], ah.attr("error"), Math.max(ah.parent()
					.position().left
					- a.scrollLeft(), 0), ah.parent().parent().position().top
					- a.scrollTop() + 230, ah.attr("startTime"), ah
					.attr("endTime"))
		} else
		{
			var d = $("#build_window");
			if (ah)
			{
				this.showInfo(this.build[c], ah.attr("error"), 120 + Math.max(
						oh.parent().position().left - d.scrollLeft(), 0), 170,
						ah.attr("startTime"), ah.attr("endTime"))
			} else
			{
				this.showInfo(this.build[c], "", 120 + Math.max(
						oh.parent().position.left() - d.scrollLeft(), 0), 170,
						null, null)
			}
		}
		if (oh.length)
		{
			if (oh.is(".disabled_order"))
			{
				oh.css("opacity", "0.8")
			} else
			{
				oh.css("opacity", "0.2")
			}
		}
	};
	this.lowlight = function(a)
	{
		ah = $("#actionHighlight_" + a);
		if (ah.length)
		{
			if (ah.is(".disabled"))
			{
				ah.css("opacity", "0.7")
			} else
			{
				ah.css("opacity", "0")
			}
		}
		oh = $("#orderHighlight_" + a);
		if (oh.length)
		{
			if (oh.is(".disabled_order"))
			{
				oh.css("opacity", "0.7")
			} else
			{
				oh.css("opacity", "0")
			}
		}
		this.hideInfo()
	};
	this.updateClock = function()
	{
		var b = addZeros((parseInt(this.currentTime / 100) % 60), 2);
		var a = addZeros(parseInt((this.currentTime / 100) / 60), 2);
		$("#clock").html(a + ":" + b);
		$("#timeLine").css("left", parseInt(this.currentTime * 0.05) + "px");
		centerDiv = $("#center_window");
		minimum = this.currentTime * 0.05 - 590;
		maximum = this.currentTime * 0.05 - 100;
		if (centerDiv.scrollLeft() < minimum)
		{
			centerDiv.scrollLeft(minimum)
		}
		if (centerDiv.scrollLeft() > maximum)
		{
			centerDiv.scrollLeft(maximum)
		}
	};
	this.updateAmounts = function()
	{
		for ( var c in this.entities)
		{
			var a = this.entities[c];
			if (a.kind != "hidden")
			{
				amountParagraph = $("#entity_amount_" + fixString(c));
				if (a.style == "supply")
				{
					amountParagraph.html(this.entities.Food.value[0] + " / "
							+ a.value[0])
				} else
				{
					if (a.style == "action" || a.style == "pause"
							|| (sum(a.value) == 0 && a.kind != "resource"))
					{
						amountParagraph.html("");
						amountParagraph.css("visibility", "hidden")
					} else
					{
						amountParagraph.css("visibility", "visible");
						if (a.style == "single")
						{
							amountParagraph
									.html('<img src="images/icons/check.png" alt="" width="14px"/>')
						} else
						{
							amountParagraph.html(a.value[0]);
							for ( var b = 1; b < a.value.length; b++)
							{
								amountParagraph.html(amountParagraph.html()
										+ " / " + a.value[b])
							}
						}
					}
				}
				if (a.kind != "resource")
				{
					overlayButton = $("#entity_" + fixString(c));
					error = this.errorDoing(a, maxIndexOf(a.value), false);
					if (error && a.eventualError
							&& !(a.style == "single" && a.value[0] == 1))
					{
						overlayButton.addClass("disabled");
						overlayButton.removeClass("highlight");
						overlayButton.css("opacity", 0.7);
						overlayButton.unbind("mouseenter mouseleave")
					} else
					{
						overlayButton.addClass("highlight");
						overlayButton.removeClass("disabled");
						overlayButton.css("opacity", 0);
						overlayButton.hover(function()
						{
							$(this).css("opacity", 0.2)
						}, function()
						{
							$(this).css("opacity", 0)
						});
						if (error)
						{
							a.currentError = error
						} else
						{
							a.currentError = ""
						}
					}
				}
			}
		}
	};
	this.insertAction = function(g, c, m, b, d)
	{
		var k = this.currentTime + d;
		if (g.style == "action" || g.style == "instant")
		{
			k = this.currentTime + Math.max(d, 2500)
		}
		var a = this.category[g.section].length;
		var j = this.currentTime - m * 100;
		for ( var h = 0; h < this.category[g.section].length; h++)
		{
			if (j >= this.category[g.section][h])
			{
				this.category[g.section][h] = k;
				a = h;
				break
			}
		}
		if (a == this.category[g.section].length)
		{
			this.category[g.section].push(k)
		}
		sectionId = g.section + "_" + a;
		sectionDiv = $("#" + sectionId);
		if (!sectionDiv.length)
		{
			sectionDiv = $("<div></div>").addClass("section").attr("id",
					sectionId);
			$("#" + g.section).append(sectionDiv)
		}
		if (m > 0)
		{
			sectionDiv.append(b)
		}
		sectionDiv.append(c);
		$("#chrono_" + c.attr("id")).remove();
		if (g.time != d)
		{
			var f = k + g.time - d;
			this.category[g.section][a] = f;
			sectionDiv.append($("<div></div>").css("left",
					parseInt((k * 0.05) - 1) + "px").css("zIndex", 0).css(
					"width", parseInt(((g.time - d) * 0.05)) + "px").addClass(
					"action").attr("id", "chrono_" + c.attr("id")).css(
					"opacity", "0.5").css("height", "24px").css("border",
					"1px solid #004").css("backgroundImage",
					"url(images/chronolines.png)"))
		}
	};
	this.startUp()
}
$(document).ready(function()
{
	sc = new StarcraftBuilder();
	$(window).bind("hashchange", function()
	{
		sc = new StarcraftBuilder();
		sc.startUp()
	})
});