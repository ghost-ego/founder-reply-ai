// lib/knowledge/science/physics.js

// ============================================
// REZE SCIENCE KNOWLEDGE ENGINE
// PHYSICS
// ============================================

const PHYSICS_KNOWLEDGE = {
  title: "Physics",
  category: "science",
  description:
    "Physics is the study of matter, energy, motion, forces, fields, space, time, and the fundamental laws governing nature.",

  // ==========================================
  // MECHANICS
  // ==========================================

  mechanics: {
    title: "Classical Mechanics",

    concepts: {
      position:
        "Position describes where an object is located relative to a chosen reference frame.",

      displacement:
        "Displacement is the change in position of an object and is a vector quantity.",

      distance:
        "Distance is the total length of the path traveled by an object.",

      speed:
        "Speed is the rate at which distance changes with time.",

      velocity:
        "Velocity is the rate of change of displacement and includes direction.",

      acceleration:
        "Acceleration is the rate of change of velocity with respect to time.",

      averageSpeed:
        "Average speed is total distance divided by total time.",

      averageVelocity:
        "Average velocity is total displacement divided by total time.",

      uniformMotion:
        "Uniform motion occurs when an object moves with constant velocity.",

      projectileMotion:
        "Projectile motion describes the motion of an object launched into the air when gravity is the dominant force after launch.",

      circularMotion:
        "Circular motion occurs when an object follows a circular path. Even at constant speed, its velocity changes because its direction changes.",

      angularVelocity:
        "Angular velocity describes how quickly an object's angular position changes.",

      angularAcceleration:
        "Angular acceleration is the rate of change of angular velocity.",

      torque:
        "Torque is the rotational effect of a force around an axis or pivot.",

      equilibrium:
        "An object is in mechanical equilibrium when the relevant net forces and, when applicable, net torques are zero.",
    },

    equations: {
      speed:
        "speed = distance / time",

      velocity:
        "velocity = displacement / time",

      acceleration:
        "a = Δv / Δt",

      constantAcceleration:
        "v = u + at",

      displacement:
        "s = ut + 1/2 at²",

      velocityDisplacement:
        "v² = u² + 2as",

      newtonsSecondLaw:
        "F = ma",

      momentum:
        "p = mv",

      impulse:
        "J = FΔt = Δp",

      torque:
        "τ = rF sin(θ)",

      centripetalAcceleration:
        "a = v²/r",

      centripetalForce:
        "F = mv²/r",

      angularVelocity:
        "ω = Δθ/Δt",
    },

    newtonsLaws: {
      first:
        "An object remains at rest or continues in uniform straight-line motion unless acted upon by a net external force.",

      second:
        "The net force acting on an object equals its mass multiplied by its acceleration: F = ma.",

      third:
        "When one object exerts a force on another object, the second object exerts an equal and opposite force on the first.",
    },

    conservationLaws: {
      momentum:
        "Total momentum of an isolated system remains constant when no net external force acts on the system.",

      angularMomentum:
        "Angular momentum is conserved in an isolated system when the net external torque is zero.",

      energy:
        "Energy is conserved in an isolated system, although it can change form or move between parts of the system.",
    },
  },

  // ==========================================
  // GRAVITY
  // ==========================================

  gravity: {
    title: "Gravity",

    concepts: {
      definition:
        "Gravity is the interaction associated with mass and energy that produces attraction between physical systems.",

      universalGravitation:
        "Newton's law of universal gravitation states that two masses attract each other with a force proportional to the product of their masses and inversely proportional to the square of the distance between their centers.",

      gravitationalField:
        "A gravitational field describes the gravitational influence around a mass.",

      weight:
        "Weight is the gravitational force acting on an object.",

      mass:
        "Mass measures an object's inertia and is a fundamental property of matter.",

      orbit:
        "An orbit occurs when an object's motion and gravitational attraction combine to produce a curved path around another body.",

      escapeVelocity:
        "Escape velocity is the minimum speed required for an object to escape a gravitational field without further propulsion, under idealized conditions.",

      microgravity:
        "Microgravity describes environments where objects experience very small apparent gravitational effects, such as in orbiting spacecraft.",
    },

    equations: {
      universalGravitation:
        "F = Gm₁m₂/r²",

      gravitationalAcceleration:
        "g = GM/r²",

      weight:
        "W = mg",

      escapeVelocity:
        "vₑ = √(2GM/r)",
    },

    earthValues: {
      surfaceGravity:
        "The standard gravitational acceleration near Earth's surface is approximately 9.81 m/s².",

      earthMass:
        "Earth's mass is approximately 5.97 × 10²⁴ kg.",

      earthRadius:
        "Earth's mean radius is approximately 6.37 × 10⁶ m.",
    },
  },

  // ==========================================
  // ENERGY
  // ==========================================

  energy: {
    title: "Energy",

    forms: [
      "kinetic energy",
      "gravitational potential energy",
      "elastic potential energy",
      "thermal energy",
      "chemical energy",
      "electrical energy",
      "magnetic energy",
      "nuclear energy",
      "electromagnetic energy",
    ],

    concepts: {
      kinetic:
        "Kinetic energy is energy associated with motion.",

      potential:
        "Potential energy is energy associated with position, configuration, or condition.",

      thermal:
        "Thermal energy is associated with microscopic motion and interactions of particles in matter.",

      chemical:
        "Chemical energy is energy associated with chemical bonds and molecular arrangements.",

      nuclear:
        "Nuclear energy is associated with the structure and interactions of atomic nuclei.",

      conservation:
        "Energy cannot be created or destroyed in an isolated system; it can be transferred or transformed.",

      efficiency:
        "Efficiency compares useful output with total input and is often expressed as a percentage.",
    },

    equations: {
      kinetic:
        "KE = 1/2 mv²",

      gravitationalPotential:
        "U = mgh",

      work:
        "W = Fd cos(θ)",

      power:
        "P = W/t",

      efficiency:
        "efficiency = useful output / total input",
    },
  },

  // ==========================================
  // WORK AND POWER
  // ==========================================

  workAndPower: {
    work:
      "In mechanics, work occurs when a force produces displacement with a component along the direction of motion.",

    positiveWork:
      "Positive work occurs when a force has a component in the direction of displacement.",

    negativeWork:
      "Negative work occurs when a force has a component opposite the displacement.",

    zeroWork:
      "A force can do zero work when it is perpendicular to the displacement or when there is no displacement.",

    power:
      "Power is the rate at which work is performed or energy is transferred.",

    mechanicalPower:
      "Mechanical power can be calculated as work divided by time or, under suitable conditions, as force multiplied by velocity.",
  },

  // ==========================================
  // WAVES
  // ==========================================

  waves: {
    title: "Waves",

    concepts: {
      wave:
        "A wave is a disturbance or oscillation that transfers energy and information through space or a medium.",

      wavelength:
        "Wavelength is the distance between corresponding points on successive waves.",

      frequency:
        "Frequency is the number of cycles completed per unit time.",

      period:
        "Period is the time required for one complete cycle.",

      amplitude:
        "Amplitude is the maximum displacement from the equilibrium position.",

      phase:
        "Phase describes the position of an oscillation within its cycle.",

      interference:
        "Interference occurs when waves overlap and combine according to the principle of superposition.",

      diffraction:
        "Diffraction is the bending and spreading of waves around obstacles or through openings.",

      reflection:
        "Reflection occurs when a wave encounters a boundary and returns into its original medium.",

      refraction:
        "Refraction occurs when a wave changes direction because its speed changes as it enters another medium.",

      resonance:
        "Resonance occurs when a system responds strongly when driven near one of its natural frequencies.",
    },

    types: {
      mechanical:
        "Mechanical waves require a physical medium.",

      electromagnetic:
        "Electromagnetic waves can propagate through vacuum.",

      transverse:
        "In a transverse wave, the oscillation is perpendicular to the direction of propagation.",

      longitudinal:
        "In a longitudinal wave, the oscillation is parallel to the direction of propagation.",
    },

    equations: {
      waveSpeed:
        "v = fλ",

      frequency:
        "f = 1/T",

      period:
        "T = 1/f",
    },
  },

  // ==========================================
  // SOUND
  // ==========================================

  sound: {
    definition:
      "Sound is a mechanical wave produced by oscillating matter and requires a medium for propagation.",

    concepts: {
      frequency:
        "The frequency of a sound wave is related to its perceived pitch.",

      amplitude:
        "The amplitude of a sound wave is related to its intensity and perceived loudness.",

      wavelength:
        "Sound wavelength is related to sound speed and frequency.",

      resonance:
        "Resonance can amplify sound when a system is driven near its natural frequency.",

      dopplerEffect:
        "The Doppler effect is a change in observed frequency caused by relative motion between a source and an observer.",

      ultrasound:
        "Ultrasound refers to sound with frequencies above the typical upper limit of human hearing.",

      infrasound:
        "Infrasound refers to sound with frequencies below the typical lower limit of human hearing.",
    },
  },

  // ==========================================
  // ELECTRICITY
  // ==========================================

  electricity: {
    title: "Electricity",

    concepts: {
      charge:
        "Electric charge is a fundamental property responsible for electrical interactions.",

      electricField:
        "An electric field describes the electric influence around charged objects.",

      current:
        "Electric current is the rate of flow of electric charge.",

      voltage:
        "Voltage is electric potential difference between two points.",

      resistance:
        "Resistance measures opposition to electric current.",

      conductor:
        "A conductor allows electric charge to move relatively easily.",

      insulator:
        "An insulator strongly resists the movement of electric charge.",

      capacitor:
        "A capacitor stores electrical energy in an electric field.",

      battery:
        "A battery converts stored chemical energy into electrical energy through electrochemical processes.",
    },

    equations: {
      current:
        "I = Q/t",

      ohmsLaw:
        "V = IR",

      electricPower:
        "P = VI",

      alternativePower:
        "P = I²R = V²/R",

      electricalEnergy:
        "E = Pt",
    },

    circuits: {
      series:
        "In a series circuit, components share a single current path.",

      parallel:
        "In a parallel circuit, components are connected across common nodes and can provide multiple current paths.",

      shortCircuit:
        "A short circuit creates an unintended low-resistance path that can produce excessive current.",
    },
  },

  // ==========================================
  // MAGNETISM
  // ==========================================

  magnetism: {
    concepts: {
      magneticField:
        "A magnetic field describes magnetic influence around magnets, electric currents, and moving charges.",

      magneticForce:
        "A moving charged particle can experience a force when moving through a magnetic field.",

      electromagnet:
        "An electromagnet produces a magnetic field using electric current.",

      induction:
        "Electromagnetic induction occurs when changing magnetic flux produces an electromotive effect.",

      motor:
        "An electric motor converts electrical energy into mechanical motion.",

      generator:
        "An electric generator converts mechanical energy into electrical energy.",

      transformer:
        "A transformer transfers electrical energy between circuits using electromagnetic induction and can change voltage.",
    },
  },

  // ==========================================
  // THERMODYNAMICS
  // ==========================================

  thermodynamics: {
    title: "Thermodynamics",

    concepts: {
      temperature:
        "Temperature describes the thermal state of a system and is related to microscopic particle behavior.",

      heat:
        "Heat is energy transferred between systems because of a temperature difference.",

      internalEnergy:
        "Internal energy is the total microscopic energy associated with particles and their interactions in a system.",

      entropy:
        "Entropy is a thermodynamic state quantity related to microscopic states and the direction of thermodynamic processes.",

      thermalEquilibrium:
        "Thermal equilibrium occurs when systems in contact no longer have a net heat transfer between them.",
    },

    laws: {
      zeroth:
        "The zeroth law establishes thermal equilibrium as a transitive relation and provides the basis for temperature.",

      first:
        "The first law expresses conservation of energy for thermodynamic systems.",

      second:
        "The second law describes the direction of spontaneous thermodynamic processes and places constraints on heat engines.",

      third:
        "The third law describes limiting behavior of entropy as temperature approaches absolute zero for appropriate systems.",
    },
  },

  // ==========================================
  // OPTICS
  // ==========================================

  optics: {
    title: "Optics",

    concepts: {
      light:
        "Light is electromagnetic radiation. Visible light is the portion of the electromagnetic spectrum detectable by human vision.",

      reflection:
        "Reflection is the return of light from a surface.",

      refraction:
        "Refraction is the change in direction of light caused by a change in propagation speed between media.",

      lens:
        "A lens refracts light and can converge or diverge rays.",

      mirror:
        "A mirror reflects light and can be plane, concave, or convex.",

      polarization:
        "Polarization describes the orientation of oscillations in transverse electromagnetic waves.",

      dispersion:
        "Dispersion occurs when different wavelengths propagate differently through a material.",

      totalInternalReflection:
        "Total internal reflection occurs when light traveling in a suitable direction from a higher-index medium reaches a lower-index boundary at an angle beyond the critical angle.",
    },
  },

  // ==========================================
  // ELECTROMAGNETIC SPECTRUM
  // ==========================================

  electromagneticSpectrum: {
    order:
      "The electromagnetic spectrum ranges from lower-frequency, longer-wavelength radio waves through microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",

    categories: {
      radio:
        "Radio waves have relatively long wavelengths and are widely used for communication.",

      microwave:
        "Microwaves are electromagnetic waves used in communications, radar, heating, and other applications.",

      infrared:
        "Infrared radiation is associated with wavelengths longer than visible red light and is strongly associated with thermal radiation.",

      visible:
        "Visible light is the portion of the electromagnetic spectrum detected by human vision.",

      ultraviolet:
        "Ultraviolet radiation has shorter wavelengths and higher photon energies than visible violet light.",

      xray:
        "X-rays are high-energy electromagnetic radiation commonly used in medical imaging and scientific applications.",

      gamma:
        "Gamma rays are very high-energy electromagnetic radiation often produced by nuclear and particle processes.",
    },
  },

  // ==========================================
  // RELATIVITY
  // ==========================================

  relativity: {
    specialRelativity: {
      definition:
        "Special relativity describes physical laws in inertial reference frames and is based on the invariance of the speed of light in vacuum.",

      relativityOfSimultaneity:
        "Events that are simultaneous in one inertial reference frame may not be simultaneous in another.",

      timeDilation:
        "Moving clocks can be measured to run slower relative to an observer in another inertial frame.",

      lengthContraction:
        "Objects moving relative to an observer can be measured as shortened along the direction of motion.",

      massEnergyEquivalence:
        "Einstein's equation E = mc² expresses the relationship between mass and energy.",
    },

    generalRelativity: {
      definition:
        "General relativity describes gravity through the geometry of spacetime and its relationship with matter and energy.",

      spacetime:
        "Spacetime combines the three spatial dimensions with time into a four-dimensional framework.",

      gravitationalTimeDilation:
        "Clocks in different gravitational potentials can experience different elapsed times.",

      blackHoles:
        "A black hole is a region of spacetime from which signals cannot escape to distant observers once they cross the event horizon.",

      gravitationalWaves:
        "Gravitational waves are propagating disturbances in spacetime produced by accelerating massive systems.",
    },
  },

  // ==========================================
  // QUANTUM PHYSICS
  // ==========================================

  quantumPhysics: {
    concepts: {
      quantum:
        "A quantum is a discrete amount associated with a physical quantity in quantum theory.",

      photon:
        "A photon is a quantum of electromagnetic radiation.",

      waveParticleDuality:
        "Quantum systems can exhibit wave-like and particle-like behavior depending on the experiment.",

      superposition:
        "Quantum superposition describes a state represented as a combination of possible quantum states.",

      uncertainty:
        "The uncertainty principle places fundamental limits on the simultaneous precision of certain pairs of physical quantities.",

      entanglement:
        "Quantum entanglement describes correlations between quantum systems that cannot be represented as independent states of the parts.",

      tunneling:
        "Quantum tunneling allows particles to have a nonzero probability of crossing barriers that classical physics would forbid them from crossing.",
    },

    applications: [
      "semiconductors",
      "lasers",
      "magnetic resonance imaging",
      "quantum computing",
      "quantum cryptography",
      "electron microscopy",
      "transistors",
    ],
  },

  // ==========================================
  // NUCLEAR PHYSICS
  // ==========================================

  nuclearPhysics: {
    concepts: {
      nucleus:
        "The atomic nucleus contains protons and neutrons and is governed by the strong nuclear interaction and other forces.",

      isotope:
        "Isotopes are atoms of the same element with different numbers of neutrons.",

      radioactivity:
        "Radioactivity is the spontaneous transformation of unstable atomic nuclei.",

      halfLife:
        "Half-life is the time required for half of the radioactive nuclei in a sample to decay.",

      fission:
        "Nuclear fission is the splitting of a heavy atomic nucleus into smaller nuclei, often releasing energy.",

      fusion:
        "Nuclear fusion combines light atomic nuclei to form heavier nuclei and can release energy.",

      chainReaction:
        "A nuclear chain reaction occurs when products of one nuclear reaction cause additional reactions.",
    },
  },

  // ==========================================
  // FLUID PHYSICS
  // ==========================================

  fluidPhysics: {
    concepts: {
      pressure:
        "Pressure is force distributed over an area.",

      density:
        "Density is mass per unit volume.",

      buoyancy:
        "Buoyancy is the upward force exerted by a fluid on an immersed object.",

      viscosity:
        "Viscosity describes a fluid's resistance to deformation and flow.",

      bernoulliPrinciple:
        "Bernoulli's principle relates pressure, speed, and elevation in idealized steady fluid flow.",

      pascalPrinciple:
        "Pascal's principle describes how pressure applied to a confined fluid is transmitted throughout the fluid.",
    },

    equations: {
      pressure:
        "P = F/A",

      density:
        "ρ = m/V",

      buoyantForce:
        "Fᵦ = ρVg",
    },
  },

  // ==========================================
  // MATERIALS
  // ==========================================

  materialsPhysics: {
    concepts: {
      elasticity:
        "Elasticity describes a material's ability to return toward its original shape after deformation.",

      stress:
        "Stress is force distributed over an area within a material.",

      strain:
        "Strain measures deformation relative to the original dimensions.",

      conductivity:
        "Electrical conductivity measures how readily a material conducts electric current.",

      semiconductor:
        "A semiconductor has electrical properties between those of typical conductors and insulators and can have its conductivity controlled.",

      superconductor:
        "A superconductor is a material that, below suitable conditions, can exhibit zero electrical resistance and other quantum effects.",
    },
  },

  // ==========================================
  // PHYSICAL CONSTANTS
  // ==========================================

  constants: {
    speedOfLight:
      "c = 299,792,458 m/s",

    gravitationalConstant:
      "G ≈ 6.67430 × 10⁻¹¹ N·m²/kg²",

    planckConstant:
      "h = 6.62607015 × 10⁻³⁴ J·s",

    elementaryCharge:
      "e = 1.602176634 × 10⁻¹⁹ C",

    boltzmannConstant:
      "k ≈ 1.380649 × 10⁻²³ J/K",

    standardGravity:
      "g ≈ 9.80665 m/s²",
  },

  // ==========================================
  // COMMON UNITS
  // ==========================================

  units: {
    force: "newton (N)",
    energy: "joule (J)",
    power: "watt (W)",
    pressure: "pascal (Pa)",
    charge: "coulomb (C)",
    voltage: "volt (V)",
    resistance: "ohm (Ω)",
    current: "ampere (A)",
    frequency: "hertz (Hz)",
    magneticField: "tesla (T)",
    temperature: "kelvin (K)",
    mass: "kilogram (kg)",
    length: "meter (m)",
    time: "second (s)",
  },

  // ==========================================
  // IMPORTANT NOTES
  // ==========================================

  notes: [
    "Physics uses mathematical models and experimental evidence to describe natural phenomena.",
    "Classical physics accurately describes many everyday situations.",
    "Relativity becomes important for high velocities and strong gravitational fields.",
    "Quantum mechanics is essential for microscopic physical systems.",
    "Physical equations are valid within their stated assumptions and domains of applicability.",
    "Measurements always have some degree of uncertainty.",
    "A scientific model is useful when it successfully explains observations and makes testable predictions.",
  ],
};

export default PHYSICS_KNOWLEDGE;
