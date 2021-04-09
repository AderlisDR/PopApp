import { Ability, AbilityBuilder, RawRuleFrom } from '@casl/ability';
import { UserRole } from '../../enums/user-role.enum';

export function createAbilityFor(role: UserRole): any {
  const actions = {
    see: 'see',
    navigate: 'navigate'
  };

  const views = {
    all: 'all',
    company: 'Compañías',
    container: 'Contenedores',
    document: 'Documentos',
    freigth: 'Carga',
    product: 'Productos',
    user: 'Usuarios',
    vessel: 'Buques',
    dashboard: 'Dashboards',
    schedule: 'Agenda de buques'
  };

  const routes = {
    all: 'all',
    company: 'company',
    container: 'container',
    document: 'document',
    freigth: 'freigth',
    product: 'product',
    user: 'user',
    vessel: 'vessel',
    dashboard: 'dashboard',
    schedule: 'schedule'
  };

  const { can, rules } = new AbilityBuilder(Ability);;

  let canSee = [];
  let canNavigate = [];

  switch (role) {
    case UserRole.Master:
      canSee = [
        views.all
      ];
      canNavigate = [
        routes.all
      ];

      can(actions.see, canSee);
      can(actions.navigate, canNavigate);
      break;
    case UserRole.Admin:
      canSee = [
        views.all
      ];
      canNavigate = [
        routes.all
      ];

      can(actions.see, canSee);
      can(actions.navigate, canNavigate);
      break;
    case UserRole.User:
      canSee = [
        views.all
      ];
      canNavigate = [
        routes.all
      ];

      can(actions.see, canSee);
      can(actions.navigate, canNavigate);
      break;
    default:
      can(actions.see, canSee);
      can(actions.navigate, canNavigate);
      break;
  }

  return rules;
}