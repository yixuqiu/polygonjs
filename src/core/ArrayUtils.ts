import {MapUtils} from './MapUtils';
import {SetUtils} from './SetUtils';
import {CoreType} from './Type';
import {randFloat} from './math/_Module';

export type ArrayToItemFunction<T> = (array: Array<T>) => T;

export function range(start: number, end?: number, step: number = 1): number[] {
	if (end == null) {
		end = start;
		start = 0;
	}
	const length = Math.floor((end - start) / step);
	const array: number[] = new Array(length);

	for (let i = 0; i < array.length; i++) {
		array[i] = start + i * step;
	}
	return array;
}
export function arrayUniq<T>(array: Array<T>): Array<T> {
	const newArray: Array<T> = [];
	for (let element of array) {
		if (!newArray.includes(element)) {
			newArray.push(element);
		}
	}
	return newArray;
	// if we use a set, we lose the order
	// const tmpSet: Set<T> = new Set();

	// for (let elem of array) {
	// 	tmpSet.add(elem);
	// }

	// const newArray: Array<T> = new Array(tmpSet.size);
	// let i = 0;
	// tmpSet.forEach((elem) => {
	// 	newArray[i] = elem;
	// 	i++;
	// });

	// return newArray;
}
export function sampleIndex(array: Array<any>, seed: number): number {
	return Math.floor(randFloat(seed) * array.length);
}
export function sample<T>(array: Array<T>, seed: number): T | undefined {
	return array[sampleIndex(array, seed)];
}
export function spliceSample<T>(array: Array<T>, seed: number): T | undefined {
	return array.splice(sampleIndex(array, seed), 1)[0];
}
export function uniqWithoutPreservingOrder<T>(array: Array<T>): Array<T> {
	return SetUtils.toArray(SetUtils.fromArray(array));

	// for (let elem of array) {
	// 	tmpSet.add(elem);
	// }

	// const newArray: Array<T> = new Array(tmpSet.size);
	// let i = 0;
	// tmpSet.forEach((elem) => {
	// 	newArray[i] = elem;
	// 	i++;
	// });

	// return newArray;
}
export function arrayCompact<T>(array: Array<T | null | undefined>): Array<T> {
	const newArray: Array<T> = [];

	for (let elem of array) {
		if (elem != null) {
			newArray.push(elem);
		}
	}

	return newArray;
}
export function arrayMin<T>(array: Array<T>): T {
	let min = array[0];
	for (let element of array) {
		if (element < min) {
			min = element;
		}
	}
	return min;
}
export function arrayMax<T>(array: Array<T>): T {
	let max = array[0];
	for (let element of array) {
		if (element > max) {
			max = element;
		}
	}
	return max;
}
export function arraySum(array: number[]): number {
	let sum = 0;
	for (let element of array) {
		sum += element;
	}
	return sum;
}
export function arrayChunk<T extends number | string>(array: Array<T>, chunkSize: number): Array<Array<T>> {
	const newArray: Array<Array<T>> = [];

	let newSubArray: Array<T> = [];
	newArray.push(newSubArray);
	for (let i = 0; i < array.length; i++) {
		if (newSubArray.length == chunkSize) {
			newSubArray = [];
			newArray.push(newSubArray);
		}
		newSubArray.push(array[i]);
	}

	return newArray;
}
export function arrayUnion<T extends number | string>(array0: Array<T>, array1: Array<T>): Array<T> {
	const newArray: Array<T> = [];
	const unionSet = SetUtils.union(arrayToSet(array0), arrayToSet(array1));
	unionSet.forEach((val) => newArray.push(val));

	return newArray;
}
export function arrayIntersection<T extends number | string>(array0: Array<T>, array1: Array<T>): Array<T> {
	const newArray: Array<T> = [];
	const intersectionSet = SetUtils.intersection(arrayToSet(array0), arrayToSet(array1));
	intersectionSet.forEach((val) => newArray.push(val));

	return newArray;
}
export function arrayDifference<T extends number | string>(array0: Array<T>, array1: Array<T>): Array<T> {
	const newArray: Array<T> = [];
	const differenceSet = SetUtils.difference(arrayToSet(array0), arrayToSet(array1));
	differenceSet.forEach((val) => newArray.push(val));

	return newArray;
}
export function arrayToSet<T extends number | string>(array: Array<T>): Set<T> {
	const set: Set<T> = new Set();
	for (let elem of array) {
		set.add(elem);
	}
	return set;
}
export function arrayIsEqual<T extends number | string>(array0: Array<T>, array1: Array<T>): boolean {
	if (array0.length != array1.length) {
		return false;
	}
	const count = array0.length;
	for (let i = 0; i < count; i++) {
		if (array0[i] != array1[i]) {
			return false;
		}
	}
	return true;
}
export function arraySortBy<T, K extends number | string>(array: Array<T>, callback: (e: T) => K): Array<T> {
	if (array.length == 0) {
		return [];
	}
	const elementsByValue: Map<K, T[]> = new Map();
	const valuesSet: Set<K> = new Set();
	for (let elem of array) {
		const value: K = callback(elem);
		valuesSet.add(value);
		MapUtils.pushOnArrayAtEntry(elementsByValue, value, elem);
	}
	const values: K[] = new Array(valuesSet.size);
	let i = 0;
	valuesSet.forEach((value) => {
		values[i] = value;
		i++;
	});

	// sort differently if the callback return value is a string or a number
	if (CoreType.isString(values[0])) {
		values.sort();
	} else {
		values.sort((a, b) => (a as number) - (b as number));
	}

	const sorted_elements: Array<T> = new Array(array.length);
	i = 0;
	for (let value of values) {
		const elements_for_value = elementsByValue.get(value);
		if (elements_for_value) {
			for (let element of elements_for_value) {
				sorted_elements[i] = element;
				i++;
			}
		}
	}
	return sorted_elements;
}
export function arrayShallowClone<T>(array: Array<T>): Array<T> {
	// https://stackoverflow.com/questions/3978492/fastest-way-to-duplicate-an-array-in-javascript-slice-vs-for-loop
	return [...array];
}

export class ArrayUtils {
	static shallowClone = arrayShallowClone;
	static min = arrayMin;
	static max = arrayMax;
	static sum = arraySum;
	static compact = arrayCompact;
	static uniq = arrayUniq;
	static uniqWithoutPreservingOrder = uniqWithoutPreservingOrder;
	static chunk = arrayChunk;
	static union = arrayUnion;
	static intersection = arrayIntersection;
	static difference = arrayDifference;
	static toSet = arrayToSet;
	static isEqual = arrayIsEqual;
	static sortBy = arraySortBy;
	static range = range;
}

const MAX_ITEMS_LENGTH = 1024;
export function arrayPushItems<T>(array: Array<T>, items: Array<T>) {
	// we avoid the standard
	// array.push(...items),
	// as this can trigger an
	// 'Maximum call stack size exceeded' error
	// on some large items array.
	// So instead, we push them elements one by one if items.length is above a threshold
	if (items.length <= MAX_ITEMS_LENGTH) {
		array.push(...items);
	} else {
		for (let item of items) {
			array.push(item);
		}
	}
}

export function arrayCopy<T>(srcArray: Array<T>, targetArray: Array<T>): void {
	targetArray.length = 0;
	arrayPushItems(targetArray, srcArray);
}
