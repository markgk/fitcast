import { Element, Repo, Handle } from '../Types/Elements';
import { ElementRepoStub } from './ElementRepoStub';
import assert from 'assert';

const isDefined = (e: any) => typeof e !== 'undefined';

export class ElementRepo {
  repo: Repo<Element> = ElementRepoStub;

  getElement = (r: Handle, copy = true) => {
    assert(r !== null, `null Element reference ${r}`);
    const e = this.repo[r!];
    assert(isDefined(e), `invalid Element reference ${r}`);
    return copy ? { ...e } : e;
  };

  putElement = (element: Element): Handle => {
    if (!isDefined(element.handle)) return null;
    if (isDefined(this.repo[element.handle!])) return null;
    this.repo[element.handle!] = element;
    return element.handle!;
  };

  public unrefElement = (element: Element): Element => {
    if (!isDefined(element.reference)) return element;
    let refElement = this.unrefElement(this.getElement(element.reference!));

    assert(
      !isDefined(element.elements),
      'reference element cannot have an elements attribute'
    );
    assert(
      element.type !== refElement.type,
      `invalid reference type mismatch ${element.type} ${refElement.type}`
    );

    refElement = { ...refElement, ...(element as object) };
    delete refElement.reference;
    return refElement;
  };
}
