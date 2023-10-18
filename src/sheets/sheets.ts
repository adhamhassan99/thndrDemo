import { registerSheet } from 'react-native-actions-sheet';

import ApiExceededSheet from './ApiExceededSheet';
import TickerDetailSheet from './TickerDetailSheet';

registerSheet('TickerDetailSheet', TickerDetailSheet);
registerSheet('ApiExceededSheet', ApiExceededSheet);

export {};
