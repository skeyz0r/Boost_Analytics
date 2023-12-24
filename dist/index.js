"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.population = exports.lead = void 0;
const today = Date.now();
const newDate = new Date();
function lead(prisma, project) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectId = project;
        yield prisma.web_analytics.update({
            where: {
                projectId: projectId
            },
            data: {
                leads: {
                    increment: 1,
                },
            }
        });
    });
}
exports.lead = lead;
function population(prisma, project) {
    return __awaiter(this, void 0, void 0, function* () {
        const projectId = project;
        const date = yield prisma.web_analytics.findMany({
            where: { projectId: projectId },
            select: {
                date: true
            }
        });
        const week = new Date(date[0].date);
        console.log(today, newDate, week);
        if (Number(date[0].date.setDate(week.getDate() + 7)) <= today) {
            yield prisma.web_analytics.update({
                where: {
                    projectId: projectId
                },
                data: {
                    population: 1,
                    populationAll: { increment: 1 },
                    date: newDate
                }
            });
        }
        else {
            yield prisma.web_analytics.update({
                where: {
                    projectId: projectId
                },
                data: {
                    population: { increment: 1 },
                    populationAll: { increment: 1 }
                }
            });
        }
    });
}
exports.population = population;
