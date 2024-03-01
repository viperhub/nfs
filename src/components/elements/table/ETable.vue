<script setup lang="ts">
import { PropType } from 'vue';
import { TableColumn } from './Table.type';

defineProps({
  columns: {
    type: Array as PropType<TableColumn[]>,
    required: true,
  },
  data: {
    type: Array as PropType<Record<string, unknown>[]>,
    required: false,
    default: () => [],
  },
  minWidth: {
    type: String,
    required: false,
    default: '1000px',
  },
  maxContentHeight: {
    type: String,
    required: false,
    default: 'auto',
  },
});

const align = (column: TableColumn) => {
  if (column.align === 'right') {
    return 'flex-end';
  }
  if (column.align === 'left') {
    return 'flex-start';
  }
  return 'center';
};
</script>

<template>
  <div class="w-full overflow-x-auto">
    <div
        :style="{
        width: '100%',
        minWidth,
      }"
    >
      <slot name="header" />
      <table class="text-sm w-full">
        <thead class="w-full border-b">
        <tr class="w-full flex my-2">
          <th
              v-for="column in columns"
              :key="column.id"
              class="flex"
              :style="{
                width: column.width ? column.width : 'auto',
                flex: column.flex ? column.flex : 'none',
                justifyContent: align(column),
              }"
          >
            {{ column.name }}
          </th>
        </tr>
        </thead>
        <tbody
            class="w-full block"
            :style="{
            ...(maxContentHeight && {
              maxHeight: maxContentHeight,
              overflowY: 'auto',
            }),
          }"
        >
        <template v-if="data.length > 0">
          <tr
              v-for="(row, index) in data"
              :key="index"
              class="w-full flex text-ellipsis overflow-hidden"
              :class="{
                'border-b': index !== data.length - 1,
              }"
          >
            <td
                v-for="column in columns"
                :key="column.name"
                class="flex text-ellipsis overflow-hidden my-4 px-1"
                :style="{
                  width: column.width ? column.width : 'auto',
                  flex: column.flex ? column.flex : 'none',
                  justifyContent: align(column),
                }"
            >
              <template v-if="!$slots[column.id]">
                {{ row[column.id] }}
              </template>
              <template v-else>
                <slot :name="column.id" :row="row" />
              </template>
            </td>
          </tr>
        </template>
        <template v-else>
          <p class="py-4 px-4 text-center text-medium">
            {{ $t('labels.no_data') }}
          </p>
        </template>
        </tbody>
        <slot name="footer" />
      </table>
    </div>
  </div>
</template>
