const SVG = '.svg';
const PNG = '.png';
const ASSETS_DATA_PATH = './assets/data/';
const CSV = 'CSV';
const ASSESTS = 'assets/';
const FILE_TYPE_EXTENSIONS = '.csv,.doc,.docx,.xls,.xlsx,.pdf,application/msword,application/msexcel,application/pdf';

const DEFAULT_COL_DEF = {
    sortable: false,
    resizable: false,
    flex: 1,
    minWidth: 100,
    filter: false,
    enableRangeSelection: true,
    pagination: false,
    suppressMovable: true
};

export {
    SVG,
    PNG,
    CSV,
    ASSESTS,
    ASSETS_DATA_PATH,
    DEFAULT_COL_DEF,
    FILE_TYPE_EXTENSIONS
};
