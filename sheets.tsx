import { registerSheet } from 'react-native-actions-sheet';

import ApiExceededSheet from './src/sheets/ApiExceededSheet';
import TickerDetailSheet from './src/sheets/TickerDetailSheet';

registerSheet('TickerDetailSheet', TickerDetailSheet);
registerSheet('ApiExceededSheet', ApiExceededSheet);

export {};
