<script setup lang="ts">
import { computed, PropType } from 'vue';
import { useRoute } from 'vue-router';
import { MenuItem } from './Menu.type';

const props = defineProps({
  items: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  activated: {
    type: String,
    default: '',
    required: false,
  },
});

const route = useRoute();

const allPages = computed(() => {
  const pages: (MenuItem & { parent?: MenuItem })[] = [];
  props.items.forEach((item) => {
    pages.push(item);
    if (item.subItems) {
      item.subItems.forEach((subItem) => {
        pages.push({
          ...subItem,
          parent: item,
        });
      });
    }
  });
  return pages;
});

const routeToItem = computed(() => {
  const currentPage = allPages.value.find((page) => page.link === route.path);
  if (currentPage) {
    if (currentPage.parent) {
      return [currentPage.parent, currentPage] as MenuItem[];
    }
    return [currentPage] as MenuItem[];
  }
  return [];
});

const isActivated = (item: MenuItem) => {
  if (props.activated) return item.link === props.activated;
  if (item.activatedRoutes)
    return item.activatedRoutes.includes(route.name as string);
  return (
      routeToItem.value[0]?.label === item.label ||
      routeToItem.value[0]?.link === item.link ||
      (route.path.startsWith(`${item.link}/`) && item.subItems?.length) ||
      item.subItems?.some((subItem) => subItem.link === route.path)
  );
};

const isSelected = (item: MenuItem) => {
  return item.routes?.includes(route.name as string);
};

const isExpanded = (item: MenuItem) => {
  return (
      item.routes?.includes(route.name as string) ||
      item.subItems?.some((subItem) =>
          subItem.routes?.includes(route.name as string)
      )
  );
};
</script>

<template>
  <div class="w-full">
    <div v-for="item in items" :key="item.label">
      <router-link :to="item.link || '#'">
        <div
            class="menu-item w-full pl-8 py-3 cursor-pointer relative"
            :class="{
            active: isSelected(item),
          }"
        >
          <div
              v-if="isActivated(item)"
              class="h-[44px] w-[5px] bg-text-primary absolute left-0 top-0"
          />
          <p class="text-sm text-ellipsis whitespace-nowrap overflow-hidden">
            {{ item.label }}
          </p>
        </div>
      </router-link>

      <div v-show="isExpanded">
        <div v-for="child in item.subItems" :key="child.label">
          <router-link :to="child.link || '#'">
            <div
                class="menu-item w-full pl-12 py-3 cursor-pointer text-sm"
                :class="{
                active: isSelected(child),
              }"
            >
              <p class="text-ellipsis whitespace-nowrap overflow-hidden">
                {{ child.label }}
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  &:hover {
    background-color: #f5f5f5;
  }
  &.active {
    background-color: #f5f5f5;
  }
}
</style>
