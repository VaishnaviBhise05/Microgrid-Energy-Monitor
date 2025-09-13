'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Button } from '@/components/ui';
import { getDummyData, getDummyAverageData } from '@/lib/dummy-data';

interface DetailsPageProps {
  metric: { title: string; value: string; unit: string };
  onBack: () => void;
  dateRange: string;
  setDateRange: (range: string) => void;
}

export const DetailsPage = ({ metric, onBack, dateRange, setDateRange }: DetailsPageProps) => {
  const days = dateRange === '7d' ? 7 : 30;
  const graphData = getDummyData(metric.title, days);
  const averageData = getDummyAverageData(metric.title, graphData);

  const combinedData = graphData.map((d, i) => ({
    ...d,
    average: averageData[i].value
  }));

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-start mb-6">
        <Button onClick={onBack} variant="ghost">
          &larr; Back to Dashboard
        </Button>
      </div>
      
      <Card className="w-full mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">{metric.title} Overview</h2>
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-blue-300">
            {metric.value} <span className="text-xl font-normal text-slate-400">{metric.unit}</span>
          </p>
        </div>
        <div className="bg-slate-700 p-4 rounded-xl shadow-inner">
          <h3 className="text-lg font-medium text-slate-300 text-center mb-2">Historical {metric.title}</h3>
          <div className="flex justify-center space-x-2 mb-4">
            <Button variant={dateRange === '7d' ? 'primary' : 'ghost'} onClick={() => setDateRange('7d')}>
              Last 7 Days
            </Button>
            <Button variant={dateRange === '30d' ? 'primary' : 'ghost'} onClick={() => setDateRange('30d')}>
              Last 30 Days
            </Button>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={combinedData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#999" />
              <YAxis stroke="#999" />
              <Tooltip contentStyle={{ backgroundColor: '#2d3748', border: 'none', color: '#e2e8f0' }} />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" activeDot={{ r: 8 }} name="Value" />
              <Line type="monotone" dataKey="average" stroke="#8884d8" name="Moving Avg" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};