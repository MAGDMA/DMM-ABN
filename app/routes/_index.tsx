import {redirect} from 'react-router';
import type {Route} from './+types/_index';

export async function loader({}: Route.LoaderArgs) {
  return redirect('/ABN-20.html');
}

export default function Homepage() {
  return null;
}