using {Upload.excelupload.db as db} from '../db/schema';

service MyService {

    entity Sample as projection on db.Sample;

}
