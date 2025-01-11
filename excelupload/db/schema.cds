using {cuid} from '@sap/cds/common';

namespace Upload.excelupload.db;

entity Sample : cuid {
    description : String(20);
}
