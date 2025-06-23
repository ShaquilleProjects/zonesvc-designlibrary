import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Basic = {
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    onPageChange: (page) => console.log('Page changed to:', page),
  },
};

export const WithInfo = {
  args: {
    ...Basic.args,
    showInfo: true,
    infoFormat: 'Page {current} of {total} ({start}-{end} of {totalItems})',
  },
};

export const Centered = {
  args: {
    ...Basic.args,
    justify: 'center',
  },
};

export const Start = {
  args: {
    ...Basic.args,
    justify: 'start',
  },
};

export const End = {
  args: {
    ...Basic.args,
    justify: 'end',
  },
};

export const Rounded = {
  args: {
    ...Basic.args,
    rounded: true,
  },
};

export const Shadow = {
  args: {
    ...Basic.args,
    shadow: true,
  },
};

export const Compact = {
  args: {
    ...Basic.args,
    compact: true,
  },
};

export const Large = {
  args: {
    ...Basic.args,
    large: true,
  },
};

export const Simple = {
  args: {
    ...Basic.args,
    simple: true,
  },
};
