<script setup lang="ts">
const services = [
  {
    title: 'Manufacturing Quality',
    activities: [
      'On-Site Support Engineering & Inspection',
      'Rework Mechanical Components & Circuit Boards',
      'Functional & Electrical Test Support and Capabilities',
      'Cosmetic Standard Inspection',
      'Level 1 Failure Analysis',
      'Production Line Rejects Validation and Analysis',
      'Label Printing Capabilities',
      'Fixture Manufacturing Capabilities',
      'Inventory Control Count',
    ],
  },
  {
    title: 'Power Supply Inspection and Rework',
    activities: [
      'Re-flash EEPROM Firmware',
      'Hipot Testing',
      'Relabeling',
      'Solder RWK',
      'RMA Bin Validation (Prior to Returning Material to Factory)',
    ],
  },
  {
    title: 'PCBA Card Assembly Inspection',
    activities: [
      'PCBA Board Assemblies Inspection',
      'IPC 610 Rev E Certification (Inspection)',
      'IPC 7121 Certification (Rework)',
    ],
  },
  {
    title: 'PCBA Card Assembly Rework',
    activities: [
      'SMT Rework',
      'PCBA Assembly Component Rework',
      "Capacitors, Resistors, IC's & Some Connectors",
    ],
  },
  {
    title: 'Mechanical Inspection and Rework',
    activities: ['Missing Hardware repair', 'Assembly Cable routing', 'Missing Drill Hole'],
  },
];
</script>

<template>
  <section id="services" class="relative z-0 overflow-hidden">
    <BaseContainer class="grid gap-10 md:grid-cols-2 lg:gap-20">
      <div>
        <span class="subtitle text-primary-700">Services</span>
        <h2
          class="mt-1 max-w-md font-display text-3xl font-semibold text-gray-900 sm:text-4xl md:max-w-none xl:text-5xl"
        >
          Full Engineering Support
        </h2>

        <div class="mt-8 space-y-8 text-gray-900 md:space-y-16">
          <div v-for="service in services">
            <div class="flex space-x-3">
              <Icon name="ph:circle-wavy-check-duotone" class="h-6 w-6 shrink-0 text-primary-500" />
              <h3 class="font-display text-2xl font-medium leading-none text-gray-900">
                {{ service.title }}
              </h3>
            </div>

            <ul class="mt-3 space-y-2 pl-9">
              <li v-for="activity in service.activities" class="flex space-x-3">
                <Icon name="ph:caret-double-right-duotone" class="mt-1 h-4 w-4 shrink-0 text-gray-900" />
                <span class="text-gray-900">{{ activity }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-6 md:gap-16">
        <div class="relative">
          <img
            alt=""
            class="w-full rounded"
            src="https://images.pexels.com/photos/9241760/pexels-photo-9241760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />

          <svg
            fill="none"
            aria-hidden="true"
            view-box="54 145 0 0"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute -bottom-[6.5rem] left-full hidden w-14 text-primary-600 xl:block"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M44.771 4.128H0V5.16h44.771a4.642 4.642 0 0 0 3.572 4.013v126.654a4.642 4.642 0 0 0-3.572 4.013H0v1.032h44.771a4.635 4.635 0 0 0 4.6 4.128A4.636 4.636 0 0 0 54 140.356a4.636 4.636 0 0 0-4.629-4.644V9.288A4.636 4.636 0 0 0 54 4.644 4.636 4.636 0 0 0 49.371 0a4.635 4.635 0 0 0-4.6 4.128Zm8.2.516a3.606 3.606 0 0 1-3.6 3.612c-.428.011-.664-.024-1.028-.15a3.613 3.613 0 0 1-2.535-2.946l-.007-.056c-.038-.294-.07-.546.007-.976a3.605 3.605 0 0 1 3.563-3.096c1.989 0 3.6 1.617 3.6 3.612Zm0 135.712a3.606 3.606 0 0 0-3.6-3.612c-.425-.003-.664 0-1.028.149l-.011.004a3.611 3.611 0 0 0-2.524 2.943c-.039.416-.096.596 0 1.032a3.605 3.605 0 0 0 3.563 3.096c1.989 0 3.6-1.617 3.6-3.612Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <img
          alt=""
          class="w-full rounded lg:flex-1 lg:object-cover lg:object-center"
          src="https://images.unsplash.com/photo-1642229407671-7ec2ba313386?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNvbGRlcmluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
        />
      </div>
    </BaseContainer>

    <DecorFadedLines
      class="absolute bottom-0 left-0 -z-10 w-[42rem] max-w-full rotate-180 transform opacity-30"
    />
  </section>
</template>
