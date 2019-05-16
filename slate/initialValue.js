import { Value } from 'slate'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 0,
          updated: 2000,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'The fundamental concepts of classical physics, space, time, mass, and derived concepts, velocity, momentum, force, angular momentum, energy ... all rest on the principle that material points have trajectories. They are defined as lines in space-time. Even the dynamics of continuous, solid or fluid media describes the trajectories of the material points which constitute the bodies in motion. But the indeterminacy relation of Heisenberg prevents quantum particles from having such classical trajectories, since their position and velocity can not be exactly defined at the same time. How then can it explain all the appearances which legitimize the fundamental concepts of classical physics?',
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 2500,
          updated: 5000,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'Systems, in one sense, are devices that take input and produce an output. A system can be thought to operate on the input to produce the output. The output is related to the input by a certain relationship known as the system response. The system response usually can be modeled with a mathematical relationship between the system input and the system output.',
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 7500,
          updated: 10000,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text:
                  'The principle of relativity states that all inertial systems are "created equal": the laws of physics are the same as long as they are formulated with respect to an inertial frame — no matter which. The first three items tell us that one inertial frame is as good as any other frame as long as the other frame differs by a shift of the coordinate origin in space and/or time and/or by a rotation of the spatial coordinate axes. What matters in physics are relative positions, relative times, and relative orientations (the orientations of objects relative to each other), inasmuch as these are unaffected by translations in space and/or time and by rotations of the spatial axes. In the physical world, there are no absolute positions, absolute times, or absolute orientations.',
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 10030,
          updated: 10060,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Number one',
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 10061,
          updated: 10070,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Number two',
              },
            ],
          },
        ],
      },
      {
        object: 'block',
        type: 'paragraph',
        data: {
          created: 10071,
          updated: 10090,
        },
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'Number three',
              },
            ],
          },
        ],
      },
    ],
  },
})

export default initialValue
