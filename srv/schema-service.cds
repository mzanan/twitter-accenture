using {Twitter as my} from '../db/schema';

service Api {
  entity dummy as projection on my.dummy;
}
